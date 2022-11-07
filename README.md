# Edd Fox Build To Rarity Ecosystem
<h1>Powered by Bobby Rabbits</h1>

## About Build Into Rarity
Build Into Rarity is a concept pioneered by Edd Fox using techniques first deployed by Corn Pop of Bobby Rabbits. The Bobfather apprenticed under Corn Pop during the development of https://www.bobbyrabbits.com/ and applied the technology used early on in Bobby Rabbits to create a methodology that can be branded, customized, and expanded upon to assist projects in need of ancillary revenue.
<br></br>
The general concept of Build Into Rarity consists of a number of parts working together as a complete process and ecosystem:
<ul>
  <li>Creating a fungible token to be earned through staking</li>
  <li>Configuring a stake pool to reward holders proportionally to their commitments and value to the project</li>
  <li>Creating secondary NFTs to represent upgradable traits and a custom marketplace for these NFTs to be purchased with rewards tokens</li>
  <li>Creating a tool that allows holders to submit primary NFTs and secondary trait NFTs for upgrades that will improve the desirability and rarity ranking of the primary NFT, therefor increasing its value. We have built two versions of this tool - one does not require the holders to send the primary NFT as we can update it simply using the mint address, but for this particular package we will use the version that sends both the primary and secondary trait NFT together for simplicity's sake.</li>
</ul>

## NOTE BEFORE STARTING:
Please ensure that your NFT collection uses mutable data (we will be using metaboss to update mutabale data for this to work properly) - also you must have the private key to the update authority wallet.
<br></br>
Another thing to note: Candy Shop seems to have issues with NFTs that have more than 3 creator addresses. Because one creator address is added bu the candy machine, please DO NOT use more than 2 creator addresses under the royalties section when creating secondary trait NFTs in hashlips.

## Installation
<ul>
  <li> Step 1: git clone git@github.com:thebobfather2/buildtorarity.git </li>
  <li> Step 2: cd buildtorarity </li>
  <li> Step 3: yarn install </li>
</ul>

## Update Index.html
<ul>
  <li> Go to the public folder and find index.html.</li>
  <li> Line 6 refers to "Logo.png" - replace this image in  the public folder. Ensure to update the name on line 6 of index.html if you are using a different file name.</li>
  <li>Edit the description of your site on line 9 of index.html.</li>
  <li>Edit your site's title on line 24 of index.html.</li>
</ul>

## Replace Links
<ul>
  <li>Replace our link with your own Magic Eden collection link on line 47 of MobileNav.jsx and on line 74 of DesktopNav.jsx in src>>components.</li>
  <li>Replace our link with your own Discord invite link on line 53 of MobileNav.jsx and on line 80 of DesktopNav.jsx in src>>components. Ensure the invite link you generate is set to never expire!</li>
  <li>Replace our website link with your own website link on line 59 of MobileNav.jsx and on line 85 of DesktopNav.jsx in src>>components. Ensure the invite link you generate is set to never expire!</li>
</ul>

## Replace Images and Logos

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
  <li>Replace the URL on line 34 in Home.jsx with the URL provided by Cardinal Labs (it will be https://stake.cardinal.so/YOURPOOLID)</li>
  <li>Change the button decription for staking on line 42 in Home.jsx</li>
</ul>

## Set Up Traits Marketplace
<ul>
  <li>Go to https://candy.liqnft.com/ and set up your store.</li>
</ul>

## Set Up .env File
<ul>
  <li>Remove ".example" from ".env.example".</li>
  <li>Using the info provided by Candy Shop, replace the REACT_APP_CANDY_SHOP_CREATOR_ADDRESS in line 9 of .env</li>
  <li>Replace the REACT_APP_CANDY_SHOP_TREASURY_MINT in line 10 of .env</li>
  <li>Replace the REACT_APP_CANDY_SHOP_PROGRAM_ID in line 11 of .env</li>
  <li>IF YOU WOULD LIKE TO TEST FIRST using devnet - please replace the RPCs with https://api.devnet.solana.com</li>
</ul>

## Customize Fonts
<ul>
  <li>The easiest way to customize fonts is to use fonts from https://fonts.google.com/</li>
  <li>Choose a font you like, then scroll down and select the exact stlye you want.</li>
  <li>View the "selected families", then copy the <'link'> and paste in into the index.html under line 15.</li>
  <li>You will then use the CSS rules box to replace the font family for the text you want to change (it will look like font-family: 'Ubuntu', sans-serif;). More on this later...</li>
</ul>

## Contact Us Below For Help!
Discord: https://discord.gg/f6Bk4wbYJj
<br></br>
Twitter: https://twitter.com/BobbyRabbits
<br></br>
Website: https://www.bobbyrabbits.com/