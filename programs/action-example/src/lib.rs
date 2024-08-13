use anchor_lang::prelude::*;

declare_id!("BDwf8Mx2Cji2rNWCQ1atRsBMrDvcX485USgg7TVD3UjK");

#[program]
pub mod action_example {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
