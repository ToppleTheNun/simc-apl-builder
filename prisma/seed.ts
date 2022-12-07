import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import dedent from "ts-dedent";

const prisma = new PrismaClient();

async function seed() {
  const email = "topple@simc.apl";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("simciscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.apl.create({
    data: {
      title: "Vengeance APL",
      body: dedent`
      # Executed before combat begins. Accepts non-harmful actions only.
      actions.precombat=/flask
      actions.precombat+=/augmentation
      actions.precombat+=/food
      # Snapshot raid buffed stats before combat begins and pre-potting is done.
      actions.precombat+=/snapshot_stats
      
      actions=auto_attack
      actions+=/variable,name=brand_build,value=talent.agonizing_flames&talent.burning_alive&talent.charred_flesh
      actions+=/disrupt
      actions+=/call_action_list,name=brand,if=variable.brand_build
      actions+=/call_action_list,name=defensives
      actions+=/call_action_list,name=cooldowns
      actions+=/call_action_list,name=normal
      
      actions.brand=fiery_brand
      actions.brand+=/immolation_aura,if=dot.fiery_brand.ticking
      
      actions.defensives=demon_spikes
      actions.defensives+=/metamorphosis,if=!buff.metamorphosis.up|target.time_to_die<15
      actions.defensives+=/fiery_brand
      
      actions.cooldowns=potion
      actions.cooldowns+=/use_items
      actions.cooldowns+=/the_hunt
      actions.cooldowns+=/elysian_decree
      
      actions.normal=infernal_strike
      actions.normal+=/bulk_extraction
      actions.normal+=/spirit_bomb,if=((buff.metamorphosis.up&talent.fracture.enabled&soul_fragments>=3)|soul_fragments>=4)
      actions.normal+=/fel_devastation
      actions.normal+=/soul_cleave,if=((talent.spirit_bomb.enabled&soul_fragments=0)|!talent.spirit_bomb.enabled)&((talent.fracture.enabled&fury>=55)|(!talent.fracture.enabled&fury>=70)|cooldown.fel_devastation.remains>target.time_to_die|(buff.metamorphosis.up&((talent.fracture.enabled&fury>=35)|(!talent.fracture.enabled&fury>=50))))
      actions.normal+=/immolation_aura,if=((variable.brand_build&cooldown.fiery_brand.remains>10)|!variable.brand_build)&fury.deficit>=10
      actions.normal+=/felblade,if=fury.deficit>=40
      actions.normal+=/fracture,if=((talent.spirit_bomb.enabled&soul_fragments<=3)|(!talent.spirit_bomb.enabled&((buff.metamorphosis.up&fury.deficit>=45)|(buff.metamorphosis.down&fury.deficit>=30))))
      actions.normal+=/sigil_of_flame
      actions.normal+=/shear
      actions.normal+=/throw_glaive
      `,
      userId: user.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
