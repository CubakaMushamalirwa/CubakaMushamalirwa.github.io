'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "eeec5e78a91a85572ba9a2cbab879fae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d6e2c287f6153e58b99194807fd9a37a",
".git/HEAD": "481e7cc093a71f82f02348c5b830bcfe",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b906a188433364fa41a6392553f40543",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c23a27d5cf8d2d31843df1b9083c86ef",
".git/logs/refs/heads/live": "c23a27d5cf8d2d31843df1b9083c86ef",
".git/logs/refs/remotes/origin/HEAD": "e58f81e529e1e158d0d017f2958e7804",
".git/logs/refs/remotes/origin/live": "dc5fcab97ef8ec046c7a4b03b89e5ebe",
".git/logs/refs/remotes/origin/main": "73f708798b0e908ecc6b396b6b717f8b",
".git/objects/01/dac9a9e2e7f635ac3c231565711d8efc5ae94f": "2c75f8a92092e7138e6bbba5b1326dd5",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0b/73f05cf8435963ccdd9676028cf0ff3ec772dd": "db573fa6580fb3c8a91fc6390a12ef1c",
".git/objects/0c/1ac556f6a908654a0d9751617702ca83c83ca5": "aa6cfe2cd3eebb9812e7821b82c2ab36",
".git/objects/0f/5afce5f5e7f75dc32e52633da6318361163e39": "a4ac145e652c86233a3961111faffd83",
".git/objects/19/96031a6397e3569a3fb364d619f32aa8a88c31": "3a2313cc1fe3cc63676dacb202d6e000",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/1c/49fb0496967e755d4784bb5959774399fe9c96": "b983eeed03b93b730c0ae96cc7142fdc",
".git/objects/1e/b50d5356fa9fde256977382b3f93c0179592ba": "b2b995e18dd828c218dd9fa5c5fb67c6",
".git/objects/1f/02f88598d1ca4524a53bd5948e45d1dc599270": "7bf2c474c5fe099170c8dab7bf876c7c",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/5dde65692244652786605d36ed98d5ab0902a1": "e73a0ce3a6ec0d51bde16e9bb7a7af55",
".git/objects/20/c1420566060c9b8ee24214cfc22ae9bf72d220": "867b60605e42f1de0706e331454e5d79",
".git/objects/27/4b331e937a778a02ba7b592ce784ac70d1f60c": "0f620251443e394a1803e635f6a6c657",
".git/objects/29/83022ccae285e8802b0042103ec9f506cec7cf": "f7fdc7d80039999633ecc58c8fb277df",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/1b4078fd3ec1652c66d82e207eaefa4ce2b210": "ce5d9bada75a2ce97601964f9b2f31a6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/db6ccb2e355760ff9fbfa94795ba84dddb8f7d": "ce6f71d3d64489a5c3ca832b585266b8",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/38/d1b8116ec5c79f140e2a055f56ce43e8e4ac53": "2ee86523cbafe90af0e0a9f4db06e9ac",
".git/objects/3b/88c1fa6ebcd7931f8d6339bf6c14243bb99871": "8ea49a2d2721f1a2b3a1f609a515a7da",
".git/objects/3d/cfb141802d82b8cf1a93e59e2008f8a369977e": "47ba38481e9f4add7566cdcfe7a16c19",
".git/objects/3f/647b07adff0d2869721b390abee3384cc3f669": "0087db7577667802c3d3c4f0a87de3fc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/11cb13733e29f1246c18eeb5dc43b78ac9dfdc": "585f6cc7b69cc4f3e934d87ac28f2030",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4c/08c8df3196065b4594217505f6779f56d53fc8": "d9e7c395cf03f9907082b73a31d785eb",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/15d7ec3b3da576d331e31d50557d12af00e2f0": "e0f4db683d50d70fefb64db529c649ad",
".git/objects/55/fd678a690bce4611021a1d18dda20dcba423e7": "b59448a2919d48737dda44b2ef103a82",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/60/c0077b85492e91eb700e80901c79ba155bffec": "87b8760724ab3c96139ade827ccb5d83",
".git/objects/60/d773a569ac2773fed65250c320e740f2c98332": "ae58ef24f96ececaca4884346e906b19",
".git/objects/63/2b90626322facca05c4d6d9f23bff6fca1ba4a": "4d3e98a7a3b80886787ae5ad756bab91",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/83125f544b0560dc205ce99bd4095def334cec": "7ffc5f548db42c182e640626ddac52df",
".git/objects/6d/d5ac6964bdf076a6e655d5591592b167d01971": "8c0947e17cca4da78f958609d50dcce5",
".git/objects/6e/d08dcc8a40bd948f9b99a9f475a6d91676aa0f": "cdc7e67fc59f257bfc505a567414ac79",
".git/objects/70/23f2e9f9abf3c7397688546834baf03a18a8c4": "ef85c2e2b5ca33409c78d7b912c918f2",
".git/objects/70/6c6ff2761c4c0813d7b716371a2be97e75b79c": "e797e51ee36ea8833925c358e8780592",
".git/objects/70/e907af47f90a1e5b4ddfdd0bd3b4bc85cd4e18": "c5b127af9020e31e1d4bbb749c52a476",
".git/objects/71/d1248552089b3f95b60b00875ccdaa0f5db5c6": "d862ec78e7f981ec742111825deaa38b",
".git/objects/74/37716e39c0e0d68258496b497546985a7f3bd8": "1e1019f9b761e4dc99beace3ca073018",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/1f008f4c4c014d6f5d6a90668e8c8eca4c1b8f": "c2314619750e0d008ca2a77d286f7b17",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/7b/48a1d06631f7782a35f43211db3ce87fd16ce4": "3b358b76b3afd4ea36702c9595f4c60a",
".git/objects/7d/59ea0eb09480a19cf2cb6db604517e5a732ca1": "5b1a1e8345d504a2377b84e2e2753847",
".git/objects/7d/fd46f25330dcd9f1ba6dfbbf97c5e3f08d9403": "f397b312cacd16ef04d6a89f61585690",
".git/objects/7f/88a1ade3ea8e9d470aecd2614bb458244cd89a": "32533445aec5ad76aab4dcbafb2de046",
".git/objects/81/aa051b8efdb744c870900f8fb512eadd487c5d": "76a9a3678e0bd184f9be1f51c62bd2df",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/86/470bbf2537cc0b660e2d38455daf9ea027c925": "65d0ed7c45da4455873f4462e8cf565d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/8d/26539678e6fa46f1996419d6f079d1059cd0a4": "a6678069c42ee7e2ecc33bb9cbfe3bdf",
".git/objects/8f/7fb745bd18edb6644d4ce91cedec16b4d2da25": "14a880248c4b2854f8d73506321cf283",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/94/21253b24970eaa82204febd8cbb6d14471a102": "36846613505ebfc1d156dab95c06fcbb",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/4588fa2027aeb21412665fce1f1dadf15ec05f": "dac3f0fe888acc11009005cfd8b3413c",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8c1ac2d3be7a7db25ce5a9af73c4a2bd893d09": "e25c635e8636257f3bcb9356abe39885",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a3/c6c540d4769f343262ee379f901f5887e691c3": "f87036a49d4c113998bd7dfe3c745768",
".git/objects/a6/8b5854d30a2c282c976a3a27d159c27bd97c17": "452bc76e282b0493e44eaad7c38dc886",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b0/66edbe55a032cb5aa324ceca2e0b093ae8f16e": "b536fc2628d0fb5415dc3d9f4268eba0",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/7f6bf0165192d26fd7504f4d3edcb88bed8de3": "3f70880e6579def3448f353b5ea074ca",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/51843ec73f6660cbea5f85cbe487c70cf2f896": "c72a3a666bbf3525cced39e3e9fd2ae1",
".git/objects/cb/5e859b4f966d961c92c0e99e2685eed2e59296": "004f35b9c17186b9b44d50f6838709c4",
".git/objects/cd/4d84a5ce3b72d3c2b67051951c5b7c10f862c3": "09e03ac8e6f3039db2185d86724da142",
".git/objects/d1/5bfc8acc2e22d493a4ba34eae9fa3c32c5abb3": "a9faa3c55910bd16efdab00c51e4a19c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/f8be3276d3a398901b81c49d8d677530d1cdbb": "3bb7405064b27129f2167c0f0362d90d",
".git/objects/d9/2467b16cd9f94f850b181475c57b8b242cf872": "8514e16a0b6cf9de0dd9f580ead51417",
".git/objects/dd/84a45b011bf6fd1a227471a79684b8ef8b13a0": "5818ae7ccffe769e5124984ae24ec792",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/20c1dad3c45e1a98f1a8d17d2537b6b3a5c21c": "12d3ff8650a3d63e6451c233fe210424",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/f9c107797676457f346cdd023320777ac34b0b": "ca1d3e94332203b481ef9b149fa05fb0",
".git/objects/eb/485bd99042aa0889a41410243c985bd8d3fbb7": "741d97786f8ed6402e6b3eb583d661ab",
".git/objects/eb/4d1e2785f4b39e7a3aa9275337c3f0ab2bc8d0": "f346411f112ba3d90f1ceba2e29412f4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a8cbd205833e606daca42fa0818e5edd831bfa": "0478b59ebfc40917238857eba3d0c565",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/08707e514cc7f19828cfe7f607da767e8e40ed": "9cf345667f6931b6317f5c3a06db741c",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/14248197968a2e6b61e883a06b9ab4df972da2": "51a4e73f8f7ab1b92a7add3c4a4a1323",
".git/objects/fc/01edbc93b3512088e51d1f584e267784af4eb4": "ac549e1ea8e90f711005dfc77d9cba36",
".git/objects/fd/c89259617b17cbcf6b42bc11d8295e00b51bc5": "30825d67e40c78a7bc70739db87a2aac",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/live": "4d9ac8ca99ae6249636007d6c844eb11",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/live": "4d9ac8ca99ae6249636007d6c844eb11",
".git/refs/remotes/origin/main": "f4ddc160e9968b7ce3e8a93d07b4a6ed",
"assets/AssetManifest.bin": "24fdb4386e73a883677f8d5e73ed8b77",
"assets/AssetManifest.bin.json": "87478a147e2c05d163db8bd54c5d8dea",
"assets/AssetManifest.json": "5ab87c93190e762f643b1c75101386d2",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-Black.ttf": "4ee31e1bdfd4b73e58b03be7235c6b13",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-BlackItalic.ttf": "7d584718a04661e4be40ae120301e87e",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-Bold.ttf": "dec15f4454da4c3dcdba85a36c9f9a37",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-BoldItalic.ttf": "b5efe009d5a7716bda810edee7b635be",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-ExtraBold.ttf": "bb1218e7fc385a9bff7b79b2b096ab09",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-ExtraBoldItalic.ttf": "4e5e038f59eb6d02e97f2302fd7ab6f4",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-ExtraLight.ttf": "e67eb5869de7de7d0daecb535dcfcda5",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-Italic.ttf": "433b5c0bbcdc5383624d124a3030e565",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-Light.ttf": "36bcc537dc03505d47b5c6ada975cb9a",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-LightItalic.ttf": "c599ecc210027f491004096a3919f619",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-Medium.ttf": "4c61e408402414f36f5c3a06ecc5915b",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-MediumItalic.ttf": "e45349294bfd8445f86a75d6084b2126",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-Regular.ttf": "aed416691ba9afb1590d9ddf220f5996",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-SemiBold.ttf": "049fdc5014564a1f21293fe11e108bcc",
"assets/assets/fonts/MontserratAlternates/MontserratAlternates-SemiBoldItalic.ttf": "a6ee45b8654b1b1b0b5d5d46de410747",
"assets/FontManifest.json": "616471d4f19c1e702c4d57270dad1bac",
"assets/fonts/MaterialIcons-Regular.otf": "22e75130346d05ce20f35f2be8d9d28a",
"assets/NOTICES": "f69e08424b1ac50c5e1875246a70c5d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "8fedcf7067a22a2a320214168689b05c",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "c48df336708c750389fa8d06ec830dab",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "5d304fa130484129be6bf4b79a675638",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "f2dc1cd993671b155e3235044280ba47",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "f128e0009c7b98aba23cafe9c2a5eb06",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "003d691b53ee8fab57d5db497ddc54db",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9621b03905e2e35bd0822caf4f0b5e57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "20695cd9660c35c2664d4f90f98c6f82",
"/": "20695cd9660c35c2664d4f90f98c6f82",
"loading.html": "1f3568f11fed30950676104fce29d91a",
"main.dart.js": "5ac1c46aacbe461ca7053c6b1b520588",
"manifest.json": "9a27478f577308558ef3e53f392fb3e3",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
