import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { ActionExample } from "../target/types/action_example";
import { PublicKey, SystemProgram, Keypair } from "@solana/web3.js";
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAccount, TOKEN_PROGRAM_ID } from "@solana/spl-token";


describe("action-example", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const provider = anchor.getProvider();
  const connection = provider.connection;
  const program = anchor.workspace.ActionExample as Program<ActionExample>;

  const confirm = async (signature: string): Promise<string> => {
    const block = await connection.getLatestBlockhash();
    await connection.confirmTransaction({
      signature,
      ...block,
    });
    return signature;
  };

  const log = async (signature: string): Promise<string> => {
    console.log(
      `Your transaction signature: https://explorer.solana.com/transaction/${signature}?cluster=devnet`
    );
    return signature;
  };

  const authority = anchor.Wallet.local() as anchor.Wallet;
  const metadata = new anchor.web3.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
  const mint = Keypair.generate();

  const masterEditionAccount = PublicKey.findProgramAddressSync(
    [Buffer.from("metadata"), metadata.toBuffer() , mint.publicKey.toBuffer(), Buffer.from("edition")],
    metadata,
  )[0];

  const nftMetadata = PublicKey.findProgramAddressSync(
    [Buffer.from("metadata"), metadata.toBuffer(), mint.publicKey.toBuffer()],
    metadata,
  )[0];

  const accounts = {
    authority: authority.publicKey,
    payer: authority.publicKey,
    mint: mint.publicKey,
    associatedTokenprogram: ASSOCIATED_TOKEN_PROGRAM_ID,
    tokenProgram: TOKEN_PROGRAM_ID,
    systemProgram: SystemProgram.programId,
    masterEditionAccount,
    nftMetadata,
  };


  it("Create A NFT!", async () => {
    const name =Buffer.from("Dappio Gang");
    const symbol = Buffer.from("DAPG");
    const url = Buffer.from("https://gateway.pinata.cloud/ipfs/QmWqzpzBGQyEi3CN4EcDDxKY7cU2Y2SXcuKESkfomG1KBy");
    await program.methods
      .createSingleNft(name.toString(), symbol.toString(),url.toString())
      .accounts({ ...accounts })
      .signers([mint])
      .rpc()
      .then(confirm)
      .then(log);
  });
});
