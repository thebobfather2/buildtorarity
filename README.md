![build2rarity-qafxkhqsl-thebobfather2 vercel app_ (1)](https://user-images.githubusercontent.com/107475188/201286647-5986404c-4665-4d04-aeb0-934cb47b8a9c.png)

# Build-Into-Rarity Solana Ecosystem (v1.0)

## About Build-Into-Rarity
<h3>Powered by Bobby Rabbits, Pioneered by Edd Fox</h3>
Build-Into-Rarity is a concept pioneered by Edd Fox using techniques first deployed by Corn Pop of Bobby Rabbits. The Bobfather apprenticed as a developer under Corn Pop during the development of https://www.bobbyrabbits.com/ and has packaged the technologies used early on in Bobby Rabbits to create a system that can be branded, customized, and expanded upon to assist projects in need of ancillary revenue. We would also like to thank and give credit to Reuben G - a holder of Bobby Rabbits who took on the challenge of developing the Edd Fox character and masterminding the concept of "WereFox", which then led to FoxMart and the birth of this ancillary revenue stream. The term "Build Into Rarity" was coined by Reuben himself, and for that, we owe him our gratitude. Below you will find instructions written by The Bobfather on how to customize and deploy the ecosystem for your project to add additional revenue capabilities - if you run into questions or concerns, please reach out using our contact info at the bottom of this README.

<h3>The Concept:</h3>
The general concept of Build Into Rarity consists of a number of parts working together as a complete process and ecosystem:
<ul>
  <li>Creating a fungible token to be earned through staking</li>
  <li>Configuring a stake pool to reward holders proportional to their commitments and value to the project</li>
  <li>Creating secondary NFTs to represent upgradable traits and a custom marketplace for these NFTs to be purchased with rewards tokens</li>
  <li>Creating a tool that allows holders to submit primary NFTs and secondary trait NFTs for upgrades that will improve the desirability and rarity ranking of the primary NFT, therefor increasing its value. We have built two versions of this tool - one does not require the holders to send the primary NFT as we can update it simply using the mint address, but for this particular package we will use the version that sends both the primary and secondary trait NFTs together for simplicity's sake.</li>
</ul>

## Roadmap
Additional phases of development will automate core processes such as art regeneration and the upgrade process. Our ultimate vision is to create a "closet" where holders can swap traits at will, effectively picking out what they want to display on their NFT that day from owned traits in their "closet" - but for this, we need to win some funding from the hackathon! Please check out the issues tab in GitHub to read more about our plans for how this tool will evolve.

## 60 Second Overview on YouTube
https://www.youtube.com/watch?v=19pC5pyiHa0&t=1s

## Example Project:
https://www.bobbyrabbits.com/#/EddFox

## NOTE BEFORE STARTING:
Please ensure that your NFT collection uses mutable data (we will be using metaboss to update mutabale data for this to work properly) - also you must have the private key to the update authority wallet.
<br></br>
Another thing to note: Candy Shop seems to have issues with NFTs that have more than 3 creator addresses. Because one creator address is added by the candy machine, please DO NOT use more than 2 creator addresses under the royalties section when creating secondary trait NFTs in hashlips.

## Installation
<ul>
  <li> Step 1: fork this repository and then git clone into the folder you will use. </li>
  <li> Step 2: cd buildtorarity </li>
  <li> Step 3: yarn install </li>
</ul>

## Update index.html
<ul>
  <li> Go to the public folder and find index.html.</li>
  <li> Line 6 refers to "Logo.png" - replace this image in  the public folder. Ensure to update the name on line 6 of index.html if you are using a different file name.</li>
  <li>Edit the description of your site on line 9 of index.html.</li>
  <li>Edit your site's title on line 24 of index.html.</li>
</ul>

## Replace Images and Logos
<ul>
  <li>The background image of the main page is located in line 8 of Home.css, or you can simply replace the "backgroundimg.png" file in src >> images.</li>
  <li>Replace ProjectLogo.png in src >> images with your own logo.</li>
  <li>Replace MarketplaceButton.png, StakingButton.png, and UpgradeButton.png in the src >> images folder. You can also rename these images, just be sure to update the imports in Home.jsx</li>
  <li>Also make sure to update the title of your homepage on line 13 of Home.jsx in src >> Pages</li>
</ul>

## Replace Links
<h3>Navigation Links</h3>
<ul>
  <li>Replace our website link with your own website link on line 59 of MobileNav.jsx and on line 69 of DesktopNav.jsx in src >> components. Ensure the invite link you generate is set to never expire!</li>
  <li>Replace our link with your own Magic Eden collection link on line 47 of MobileNav.jsx and on line 74 of DesktopNav.jsx in src >> components.</li>
  <li>Replace our link with your own Discord invite link on line 53 of MobileNav.jsx and on line 80 of DesktopNav.jsx in src>>components. Ensure the invite link you generate is set to never expire!</li>
</ul>
<h3>Homepage Button Links</h3>
<ul>
  <li>Replace link with your own Magic Eden link for the buy primary NFT button on line 18 of Home.jsx</li>
  <li>There will be one more link to fix after you set up staking - you will replace the staking button link with the URL provided by Cardinal Labs (it will be https://stake.cardinal.so/YOURPOOLID) on line 28 of Home.jsx</li>
</ul>

## Create Your Rewards Tokens
<ul>
  <li>Go to https://app.strataprotocol.com/launchpad and click "Create New Token, and then "Next" in the bottom right.</li>
  <li>Click "Self Managed" and then "Next" in the bottom right.</li>
  <li>Connect your wallet and create your rewards tokens.</li>
  <li>PLEASE NOTE: Please use 1 or more Mint Decimals when you create these! 0 decimal fungible tokens will show up as NFTs in your wallet. 1 or more decimal tokens will show along with your Solana as a currency, which is much more user-friendly when being used as a reward currency and for shopping in your traits marketplace.</li>
</ul>

## Configure Your Stake Pool
<ul>
  <li>Go to https://stake.cardinal.so/ and connect your wallet</li>
  <li>Click "Create your pool +"</li>
  <li>Use the information for your primary NFT's collection or creator address to tell it which NFTs can be staked</li>
  <li>Under REWARD DISTRIBUTION choose Transfer and provide your fungible token's mint address, and fund the stake pool with plenty of tokens for your holders to redeem</li>
  <li>Replace the URL on line 38 in Home.jsx with the URL provided by Cardinal Labs (it will be https://stake.cardinal.so/YOURPOOLID)</li>
  <li>Change the button description for staking on line 42 in Home.jsx</li>
</ul>

## Set Up Traits Marketplace
<ul>
  <li>Go to https://candy.liqnft.com/shop to set up your store.</li>
  <li>Change Network to Mainnet Beta and click Create Shop.</li>
  <li>Give your shop a name and paste the mint address of your fungible token where it says Shop Currency.</li>
  <li>The code it gives you will be used in your .env file, but can always be accessed from the Home menu on the Candy Shop website.</li>
</ul>

## Set Up .env File
<ul>
  <li>Remove ".example" from ".env.example".</li>
  <li>Using the info provided by Candy Shop, replace the REACT_APP_CANDY_SHOP_CREATOR_ADDRESS in line 11 of .env (this should be the wallet address you used to set up your trait marketplace).</li>
  <li>Replace the REACT_APP_CANDY_SHOP_TREASURY_MINT in line 12 of .env (this should be the mint address of your fungible token).</li>
  <li>Replace the REACT_APP_CANDY_SHOP_PROGRAM_ID in line 13 of .env (this might already be correct).</li>
  <li>IF YOU WOULD LIKE TO TEST FIRST using devnet - please replace the RPCs with https://api.devnet.solana.com</li>
</ul>

## Create Secondary Trait NFTs
<ul>
  <li>Git clone hashlips to generate NFTs that represent your upgradable traits: https://github.com/HashLips/hashlips_art_engine</li>
  <li>Git clone Metaplex Sugar to launch and then self-mint your secondary trait NFTs: https://github.com/metaplex-foundation/sugar</li>
  <li>Add your secondary trait NFTs to your Candy Shop - sign into your candy shop at https://candy.liqnft.com/shop/, then click the Collections tab, then Create Collection.</li>
  <li>Add a Name, Symbol, Categories, Description, and upload an image for your secondary traits.</li>
  <li>Under ACTIONS on the right, click Edit, then scroll down and click Add NFT Identifier. You only need to add the mint address of one of the NFTs from the batch as an identifier, and it will allow all NFTs from that batch.</li>
  <img width="1431" alt="nftidentifier" src="https://user-images.githubusercontent.com/107475188/203469783-a74999a8-8149-4609-bb1f-1204145be950.png">
  <img width="1293" alt="identifier2" src="https://user-images.githubusercontent.com/107475188/203469790-0761e1b8-d7a3-4746-9945-1e12864f0608.png">
  <li>List your traits for sale at various prices on your Trait Marketplace.</li>
  <li>Update the upgradefilter.json file to add your new hashlist so that the Upgrade Tool displays traits for holders to submit for upgrades. I like to use the Magic Eden Hashlist Tool here: https://magiceden.io/mintlist-tool</li>
</ul>

## Update Hashlists
We must add the primary NFT hashlist as well as the hashes for any upgrades you would like to be displayed in the Upgrade Tool.
<ul>
  <li>Replace the primaryfilter.json hashlist with your primary NFT hashlist. As mentioned earlier, this can be easily found with the Magic Eden Hashlist Tool: https://magiceden.io/mintlist-tool</li>
  <li>You will also need to replace the upgradefilter.json hashlist with the hashlists of your secondary trait NFTs. You will need to add new hashes each time you add traits to your Trait Marketplace.</li>
</ul>

## Trait Marketplace - Branding Customization
<ul>
  <li>Go to TraitMarketplace.tsx in src >> Pages.</li>
  <li>On line 42 change the Title of your marketplace.</li>
  <li>On line 43 change the Description of your marketplace.</li>
  <li>On line 56 edit the text for the section where holders can purchase secondary trait NFTs.</li>
  <li>On line 72 edit the text where your holders will be able to sell their unused secondary trait NFTs.</li>
</ul>

## Upgrade Tool Receiving Wallet
<ul>
  <li>Change the PublicKey wallet on line 114 of Upgrade.jsx to the wallet address that you would like to receive primary NFTs and secondary trait NFTs when holders submit them for upgrades.</li>
  <li>NOTE: When holders use the upgrade tool, you will receive both the primary NFT and the secondary trait NFT. You will then need to create the new version of the primary NFT, update the metadata to display the new one, and send it back to the holder. Transaction history in Phantom wallet is a great way to see where the came from to send them back, but also if you check the Issues tab in GitHub you will see our plans to improve upon this workflow in future versions. Instructions on how to upgrade the NFTs are further down in the README.</li>
</ul>

![IMG-7408](https://user-images.githubusercontent.com/107475188/201282015-21685f87-edb0-4db5-a70b-ebb49bed968c.jpg)


## Edit Fees Charged For Upgrades
<ul>
  <li>Change the feeAddress on line 34 in Upgrade.jsx to your Treasury Wallet address - this is where the revenue will be sent when a holder upgrades their trait.</li>
  <li>Set the Solana Fee next to upgradeFee on line 37 of Upgrade.jsx (NOTE: Solana has 9 decimals, so 100_000_000 = 0.1 Solana). If you would prefer to charge using your fungible tokens instead, set this to 0 and proceed to the next step.</li>
  <li>OPTIONAL: Change the PublicKey address on line 110 in Upgrade.jsx to the SPL token address of your fungible tokens (reward tokens) - if you would like to charge a fee using your fungible tokens instead of or in addition to the Solana fee, this is how the tool knows which tokens to accept</li>
  <li>OPTIONAL: Change the address in line 136 of Upgrade.jsx to the token address that will receive fungible tokens if you choose to charge the fee using fungible tokens. This is perhaps the most confusing one - it is the TOKEN account, not the wallet address receiving the tokens. Reach out to us at Bobby Rabbits if you need help here.</li>
  <li>OPTIONAL: Change the number on line 162 in Upgrade.jsx to the amount you'd like to charge using your fungible tokens if you choose to do so.</li>
</ul>

## Upgrade Tool - Branding Customization
<ul>
  <li>Go to Upgrade.jsx in src >> Pages.</li>
  <li>Replace the rewardcoin.png image with an image of your fungible tokens (reward coins).</li>
  <li>On line 229, edit the Title of this page.</li>
  <li>On line 236, edit the text asking your holders which primary NFT they want to choose to upgrade.</li>
  <li>On line 268, edit the text asking your holders which secondary trait NFT they want to choose for their upgrade.</li>
  <li>On line 303 edit the text describing the fee for updating their NFT.</li>
  <li>On line 306, edit the description for what they can expect when they submit the upgrade.</li>
  <li>On line 318, edit the button text to submit the upgrade.</li>
  <li>On line 361, edit the text that will be displayed when the transaction confirms.</li>
</ul>

## Customize Fonts
<ul>
  <li>The easiest way to customize fonts is to use fonts from https://fonts.google.com/</li>
  <li>Choose a font you like, then scroll down and select the exact style you want.</li>
  <li>View the "selected families", then copy the <'link'> and paste in into the index.html under line 15.</li>
  <li>You will then use the CSS rules box to replace the font family for the text you want to change (it will look like font-family: 'Ubuntu', sans-serif;). More on this later...</li>
  <li>EXAMPLE: To change the font of the title on the home page, go to Home.css and replace the font-family on line 24.</li>
</ul>

## Upgrading Traits
<ul>
  <li>You will need to monitor the receiving wallet and/or your inboxes for when holders submit NFTs that need to be upgraded. We plan to automate this process in later phases, but for now the service requires some manual effort by founders.</li>
  <li>Look up the submitted primary NFT on https://solscan.io/ to obtain the mint address, edition number and view the existing traits</li>
  <img width="1291" alt="solscan1" src="https://user-images.githubusercontent.com/107475188/203470434-7dc063fe-df00-4bd5-982f-7c86eb8a4ab5.png">
  <li>Remember to save the current metadata URI and add it to your spreadsheet (more on batch updating later) if you would like to revert back to this version later.
    <img width="1308" alt="solscan2" src="https://user-images.githubusercontent.com/107475188/203470542-0abd2a36-6157-44a6-a37a-85d7aedeb05b.png">
  <li>Use Hashlips to generate the upgraded NFT (change the config file in hashlips to only create 1, and put only one of each trait in the folder to create desired NFT)</li>
  <li>Edit the .png and .json in the build folder to match the edition number on the existing NFT. Not only do the file names need to match, but there are 4 places inside the .json file where you will need to update this edition number.</li>
  <img width="598" alt="metadata" src="https://user-images.githubusercontent.com/107475188/203470513-bba43afd-ed03-4981-b766-912ac3476cd1.png">
  <li>Use Bobby Rabbits NFT Minter to create new URI links: https://www.bobbyrabbits.com/#/nftminter - please note that you need to upload the image, then the .json, then click the button to GET IMAGE URI, then once that completes, GET METADATA URI, in that order. The metadata URI is what you will use in the command below to update the primary NFT. </li>
  <li>Install Metaboss: https://metaboss.rs/installation.html</li>
  <li>Create a .json file in a SEPARATE folder from your site. The name of the .json will be your wallet's public address .json, and the content of the .json will be your private key, similar to how keypair files are saved when you use Metaplex <b>(IMPORTANT NOTE: PROTECT THIS CAREFULLY AS IT CONTAINS YOUR PRIVATE KEY - DO NOT UPLOAD WITH YOUR SITE!!!</b></li>
  <li>Within the folder containing your keypair file, run the command "metaboss update uri -a primary_NFT_mint_address_here -k keypair_file.json -u https://arweave.net/thisisyourmetadataURI" using the mint address after "-a", your keypair file name after "-k", and the metadata URI from the NFT Minter after "-u". This will update the token.</li>
  <li>Burn the secondary trait NFT, send the primary NFT back to the holder (double check the address it came from on Solscan.io, and/or confirm the address with the holder in your Discord), then use the wallet cleaner to remove the empty token accounts: https://www.bobbyrabbits.com/#/Cleaner</li>
</ul>
Commands:
<ul>
  <li>metaboss update uri -a Primary_NFT_Mint_Address_Here -k Keypair.json -u https://arweave.net/thisisyourmetadataURI</li>
</ul>
Notes:
<ul>
  <li>I've found it helpful to create a spreadsheet to track URIs in case a holder wants their original NFT art, or for other issues that would require easy access to alternate NFT art such as the WereFox capabilities within Edd Fox.</li>
</ul>

## Optional: Batch Updating
<ul>
  <li>You can also track versions of primary NFTs through .json files and use the metaboss update all command to switch groups of NFTs back and forth.</li>
  <li>To update a batch of NFTs that already have existing URIs you are tracking through .json files, use metaboss update uri-all --keypair keypair_file.json --json-file \name_of_list.json using the update authority keypair file and the name of the .json file with the list you want to upgrade to.</li>
</ul>
<img width="637" alt="werefoxlist" src="https://user-images.githubusercontent.com/107475188/203470912-1610b086-4801-4623-b239-b324ba25f429.png">
<img width="1372" alt="spreadsheet" src="https://user-images.githubusercontent.com/107475188/203470916-ac7b8fd9-75c1-46e4-8abd-357fc66ff096.png">

## Developer Notes
Common errors that holders run into and how to troubleshoot them:
<ul>
  <li>By far the most common error is that holders attempt to submit NFTs to be upgraded using the Upgrade Tool, but forget to unstake their primary NFT. If a holder is getting an error using the Upgrade Tool, the first question you should always ask is "did you unstake?"</li>
  <li>The wallet that receives NFTs through the Upgrade Tool must be constantly cleaned to remove empty token accounts once upgraded NFTs have been sent back to holders, otherwise holders may get errors when trying to send NFTs for upgrades. You can use our wallet cleaner tool here: https://www.bobbyrabbits.com/#/Cleaner</li>
  <li>The node being use is on line 22 of Upgrade.jsx and line 18 in TraitMarketplace.tsx, as well as in the .env - we have had many issues with free Solana RPC endpoints going down lately or becoming no longer free - you may need to purchase a Solana node endpoint and replace it on these files.</li>
</ul>
Other notes:
<br></br>
<ul>
  <li>Burning the secondary trait NFTs once received through the Upgrade Tool will offset the cost of sending the upgraded primary NFTs back, and ensures rarity as you can limit the amount of that trait that can possibly exist in the collection when you generate the trait collections.</li>
  <li>Don't forget to update the upgradefilter.json hashlist whenever you add new trait NFTs to the Trait Marketplace, otherwise they will not be displayed in the Upgrade Tool.</li>
</ul>

## Contact Us Below For Help!
Discord: https://discord.gg/f6Bk4wbYJj
<br></br>
Twitter: https://twitter.com/BobbyRabbits
<br></br>
Website: https://www.bobbyrabbits.com/

## Hire Bobby Rabbits
If this turns out to be a way bigger task than you're interested in doing on your own, you can simply hire us to do the work for you! Check out https://www.bobbyrabbits.com/#/Services for estimated pricing. You can click the link at the top to open a ticket in our Discord, or just reach out via the contact info provided above. 
<br></br>
WAGMI 
