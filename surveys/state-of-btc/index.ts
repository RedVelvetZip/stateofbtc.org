type QuestionType = "checkbox" | "radio" | "text";

interface QuestionOption {
	id: string;
	label: string;
	isOther?: boolean;
	isNegative?: boolean;
}

interface Question {
	id: string;
	title: string;
	type: QuestionType;
	options?: QuestionOption[];
}

interface Section {
	id: string;
	title: string;
	description: string;
	questions: Question[];
}

interface Survey {
	id: string;
	title: string;
	year: number;
	sections: Section[];
}

export default {
	id: "xykjy2bwbbrnh73fmehdw",
	title: "State of Bitcoin",
	year: 2024,
	sections: [
		{
			id: "8za2zbez8j3apw9ep7xe9",
			title: "Features",
			description: "Usage and experience with Bitcoin protocol features",
			questions: [
				{
					id: "2mj9wq6q427rwzxm8h78a",
					title: "Which of these Bitcoin features have you used?",
					type: "checkbox",
					options: [
						{ id: "nj7ggbqn9pm9bdwwai3xi", label: "Taproot" },
						{ id: "rw9tpffeprcynzbpaczyf", label: "SegWit" },
						{
							id: "icj4jkr8qhwigzzg2bw27",
							label: "DLC (Discrete Log Contracts)",
						},
						{ id: "8mpyrik27e346i36ddhbq", label: "OP_RETURN" },
						{ id: "47hztfbcyaznnfxpp8ywh", label: "Schnorr Signatures" },
						{
							id: "89z96kfdk4f98ad4bmwnb",
							label: "Multi-signature (MultiSig)",
						},
						{ id: "mqi3xrr6dj7na2j8bf6re", label: "Replace-By-Fee (RBF)" },
						{ id: "i2hiae9zw2x38re23dxej", label: "Time-locked transactions" },
						{ id: "a7g83hhnf3cbmtq4rfth7", label: "Pay-to-Script-Hash (P2SH)" },
						{ id: "nrrgr6fpjjjz3xyknkein", label: "Native SegWit (bech32)" },
						{ id: "6rkqqtydnywencx4zghzx", label: "Nested SegWit" },
						{ id: "jfrneqz6fwgty74ykx8cf", label: "Miniscript" },
						{ id: "7i43kctanwbkf3zixj8hi", label: "Other", isOther: true },
						{
							id: "3kxggr8kfhjb726m77b2x",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "bpg8xtgectafiydzxix2t",
					title:
						"What are your primary motivations for exploring these features?",
					type: "checkbox",
					options: [
						{ id: "q9hwzrxf7zgt8gaxexb9k", label: "Privacy" },
						{
							id: "dqppjy83ghmpq98iqyjz2",
							label: "Transaction cost reduction",
						},
						{
							id: "pn3rc4exkr2kfeqamtaqz",
							label: "Smart contract development",
						},
						{
							id: "y7a94ejpq74rj4pfbgkct",
							label: "Building payment solutions",
						},
						{
							id: "tnzy6k94eezg879yanhnk",
							label: "Personal curiosity and experimentation",
						},
						{ id: "aipb8i7m8w6bwdag9yjwc", label: "Other", isOther: true },
						{
							id: "3bfzgxn34ja7i2zy8882i",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "mz7rmpyztn3chdk4bmfmt",
					title: "How frequently do you use these Bitcoin features?",
					type: "radio",
					options: [
						{ id: "g4ctjwqcckg4mkq7dkpj4", label: "Daily" },
						{ id: "ec9cyk8nmc8n82ayafgjb", label: "Weekly" },
						{ id: "ih97fbz9fr3dncqe79e9f", label: "Monthly" },
						{ id: "pxtp3p83iqjzk7qr92k6k", label: "Rarely" },
						{ id: "mepkr6azhjktbt7dpame9", label: "Never" },
					],
				},
				{
					id: "p6adaj6ggd9kpagnjxqrh",
					title:
						"What challenges, if any, have you encountered when working with these Bitcoin features?",
					type: "checkbox",
					options: [
						{
							id: "bw4jk2mg4z9t9mfqrngrh",
							label: "Complexity of setup or integration",
						},
						{
							id: "kfjytj3dx4ktj4wmikg9n",
							label: "Lack of knowledge or experience",
						},
						{
							id: "akntajjqxfrrt7dq6pmwt",
							label: "Limited documentation or support",
						},
						{ id: "2ehtrq39enbip6a6h34fn", label: "High transaction fees" },
						{
							id: "c9jjfcxk9ynebiy9ewmdd",
							label: "Compatibility with wallets or exchanges",
						},
						{ id: "6q9x62tttjkgajyftwh3m", label: "Lack of developer tools" },
						{ id: "ahq9yefkegxbmf8mzntff", label: "Other", isOther: true },
						{
							id: "q6qyheriege72apc7pnkx",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
			],
		},
		{
			id: "hh8ikwtbfpypyamg6azw7",
			title: "Wallets",
			description: "Bitcoin wallet preferences and backup practices",
			questions: [
				{
					id: "6kdykcjetf7g4c26i7apm",
					title: "Which wallet types have you used?",
					type: "checkbox",
					options: [
						{
							id: "mzwprtarhkrjewe9k7bwd",
							label: "Hardware Wallet (e.g., Ledger, Trezor)",
						},
						{
							id: "gck2he7cmqdp2q3xdbh32",
							label: "Software Wallet (e.g., Sparrow, Electrum)",
						},
						{
							id: "4gzztxqmwya4dywiyfamd",
							label: "Mobile Wallet (e.g., BlueWallet, Muun)",
						},
						{
							id: "fxqjgwtgawrz48h4f9xn2",
							label: "Custodial Wallet (e.g., Coinbase, Binance)",
						},
						{
							id: "zj76xymeingiyyxwb9tyd",
							label: "Non-Custodial Wallet (e.g., Green Wallet, Wasabi)",
						},
						{ id: "zbyrt926rckri6gehr838", label: "Other", isOther: true },
						{
							id: "ef826eacyjw43ccmap2at",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "72ecmjwdj3pngkmq48276",
					title: "Which hardware wallets have you used?",
					type: "checkbox",
					options: [
						{ id: "tbr679ewp67recxrxfc2b", label: "Ledger" },
						{ id: "i9wwam77c4fwcycwdm7n7", label: "Trezor" },
						{ id: "tptndgm7xab2wh3t4yqa8", label: "Coldcard" },
						{ id: "yzppgferzpe4h2w6i49z2", label: "BitBox" },
						{ id: "4xq3whbzwajdd7dq678dd", label: "Foundation Passport" },
						{
							id: "eqgq9dabrcna4xj3ajt42",
							label: "Keystone (formerly Cobo Vault)",
						},
						{ id: "xrcfg4qkidwqtk4icrydq", label: "KeepKey" },
						{ id: "ezxpzfep4geqpmhtxmyhc", label: "SafePal S1" },
						{ id: "c64gjewrwwirj7dd9m7gd", label: "Jade (by Blockstream)" },
						{ id: "iia2biqn23e7i2zpg8qpk", label: "Other", isOther: true },
						{
							id: "26mhardqhy8f2z6dae8hn",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "b7yxmbeg229kqppgdee6a",
					title: "Which software wallets have you used?",
					type: "checkbox",
					options: [
						{ id: "4irb92jw4fetipk2p2xpg", label: "Electrum" },
						{ id: "fg4p2kk6w6dpkcf77rkgt", label: "BlueWallet" },
						{ id: "gkfh6f3jpaxtzwdzppbxt", label: "Muun" },
						{ id: "p68izrtrgnngimc6tyzan", label: "Samourai" },
						{ id: "deqdt7ezbdy6mgxd4ichp", label: "Phoenix" },
						{
							id: "gi9r2zdyk2wb87exij66k",
							label: "Green Wallet (Blockstream)",
						},
						{ id: "3myy2qip2i9wr2krrpihq", label: "Zeus" },
						{ id: "c8zwyyibyihy9dz7zybme", label: "Breez" },
						{ id: "tip3cnph8g3dza6pben8w", label: "Wallet of Satoshi" },
						{ id: "mm9dwey4698dzaniqqp6a", label: "Edge" },
						{ id: "dr7e42ppadjrf8d44dec7", label: "BRD" },
						{ id: "ckj3xwmciq4ghqxexrrxt", label: "Mycelium" },
						{ id: "bwkra682dkfwepf7tjex7", label: "Bitcoin Beach Wallet" },
						{ id: "632yc72bx98ziapgbrxn7", label: "Simple Bitcoin Wallet" },
						{ id: "rjydkdjji2k99rndxrd2t", label: "Sparrow" },
						{ id: "erjamwyd89a2xkbarc2ei", label: "Wasabi" },
						{ id: "e8ybjrg9jyxmbmdyeiy6r", label: "Other", isOther: true },
						{
							id: "bhtxexdr4jecka9amyyi4",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "de7ma42xdj7wrzfytwhwz",
					title: "How important is multisig support when choosing a wallet?",
					type: "radio",
					options: [
						{ id: "96fmd32z7rbmcgtdzmajh", label: "Very important" },
						{ id: "qrk4jt6674p4eb9ryqqqr", label: "Somewhat important" },
						{ id: "cy6i68wje9zabhn9ia2a7", label: "Not important" },
						{ id: "zcbrx47mhggmxytt4y92j", label: "No opinion" },
					],
				},
				{
					id: "48gheyfwwnef7i9zy7qj6",
					title: "How do you typically store your wallet backup?",
					type: "checkbox",
					options: [
						{ id: "k6g69pqdj4yg6x332q2dy", label: "Paper backup" },
						{
							id: "nice2geeg9e2kjxkd4qab",
							label: "Metal backup (e.g., Cryptosteel, Billfodl)",
						},
						{
							id: "63t86tx3f74jkwzx92qi9",
							label: "Digital backup (e.g., encrypted file)",
						},
						{ id: "4888bj6gdm82gfqgjrdaz", label: "Other", isOther: true },
						{
							id: "gkyjrzkfew42t4fatt8tb",
							label: "I don't back up my wallet",
							isNegative: true,
						},
					],
				},
			],
		},
		{
			id: "ndrtefrxrqpn89dj3wra6",
			title: "Exchanges & Fintech",
			description: "Experience with Bitcoin trading and financial services",
			questions: [
				{
					id: "pqz8t6xhtzzdcc3xmzmtg",
					title: "Which types of exchanges do you use?",
					type: "checkbox",
					options: [
						{
							id: "yi34g3yt3chtezear7a3h",
							label:
								"Centralized Exchange (e.g., Coinbase, Gemini, Binance, Kraken)",
						},
						{
							id: "g8xbt67awkz6rkefxct7w",
							label: "Decentralized Exchange (e.g., Bisq, Hodl Hodl)",
						},
						{
							id: "wgienmpcfj4x38gd9fcgy",
							label: "Peer-to-Peer Platforms (e.g., LocalBitcoins, Paxful)",
						},
						{ id: "z3yzy26zwdnf4txw3y343", label: "Other", isOther: true },
						{
							id: "gnwmjejmqbak6e4mtjr9d",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "hapmpkg9ycfp69ghwgf26",
					title: "Which centralized exchanges have you used?",
					type: "checkbox",
					options: [
						{ id: "7af863hr2jyqjbpf22kmh", label: "Coinbase" },
						{ id: "jfer6xdt7a7yn3fkfabbn", label: "Binance" },
						{ id: "3q2mhn4eh9er6kxix38kj", label: "Kraken" },
						{ id: "p7n8ie3fiq8tneynxykfc", label: "Cash App" },
						{ id: "mpc938nqqimr47hgzzb7z", label: "River" },
						{ id: "mx4ihhrenykp8y8qk72p6", label: "Gemini" },
						{ id: "c34iiyghce4rdy8kh6wtq", label: "Crypto.com" },
						{ id: "whpp3b8tq2h3rk72z3ggq", label: "Robinhood" },
						{ id: "6egc7c3kjq4ebm28wx4cm", label: "Swan Bitcoin" },
						{ id: "7rjrm2jhk4n6p6pey8ety", label: "Strike" },
						{ id: "rxzmbega8x8yzz68kim46", label: "Other", isOther: true },
						{
							id: "r749xymqyw9kmahdmd4hi",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "aif4ihbmra2jiqjke72da",
					title: "Which decentralized / peer-to-peer exchanges have you used?",
					type: "checkbox",
					options: [
						{ id: "zm2eynp4zwr77jwiayj2z", label: "Bisq" },
						{ id: "a8x8hx7rmbx7yynqr2m2h", label: "Hodl Hodl" },
						{ id: "92xz3rnjbnrd6d2nbwqwb", label: "RoboSats" },
						{ id: "27pjgw2xy7qicmqgyyr9r", label: "AgoraDesk" },
						{ id: "m9ewh22qejnagykb6xtdd", label: "LocalBitcoins" },
						{ id: "ffcbmapfma8mwgra4ki4d", label: "Paxful" },
						{ id: "29kq8jrm787ymjggbr6p6", label: "Other", isOther: true },
						{
							id: "4c9q4e4aickik674pxqp9",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "48z39ycdqbzifxt3p67kn",
					title:
						"What is your experience with withdrawing Bitcoin from centralized exchanges?",
					type: "radio",
					options: [
						{ id: "3exczdf8pxhfhi7f7rwde", label: "Never had issues" },
						{ id: "iypr3c279bhi39gj7ryif", label: "Occasional minor issues" },
						{ id: "d7h432k92miwicdkrc2g2", label: "Frequent issues" },
						{
							id: "rmch7hbbxr98t2ri38bhp",
							label: "Major issues preventing withdrawals",
						},
						{
							id: "xtacgz2pz9pqgwn88xpji",
							label: "Never attempted to withdraw",
						},
					],
				},
				{
					id: "7zx9bxjtrfbcziccih28c",
					title:
						"How satisfied are you with the exchanges and custodial services you use?",
					type: "radio",
					options: [
						{ id: "t4adkge9acc44tftppzjg", label: "Never had issues" },
						{ id: "zgibr8hdd832dagcnfdda", label: "Occasional minor issues" },
						{ id: "hnmb2fyh7gi4iegf6iqrr", label: "Frequent issues" },
						{
							id: "z84hayhnayawbzjf486h8",
							label: "Major issues preventing withdrawals",
						},
						{
							id: "6kwrd3ek8ere76yin29ji",
							label: "Never attempted to withdraw",
						},
					],
				},
				{
					id: "4748bc9t9ciqtnrbtyf36",
					title:
						"Do you primarily use custodial or non-custodial solutions for storing Bitcoin?",
					type: "radio",
					options: [
						{ id: "rj6dqrmzq7cjfyapbtrgr", label: "Mostly custodial" },
						{ id: "92h4qhnqpyf2n37dtqzac", label: "Mostly non-custodial" },
						{ id: "a8kky3t94haar6jxg2f9b", label: "Mix of both" },
					],
				},
			],
		},
		{
			id: "ixggjg3cird9df93hmxne",
			title: "Lightning Network",
			description: "Usage of Layer 2 Bitcoin payment solutions",
			questions: [
				{
					id: "jmtqqp7e3kq9hdjhc8fn6",
					title: "Which Lightning Network wallets have you used?",
					type: "checkbox",
					options: [
						{ id: "czbcdtfjj2inaci92p46q", label: "Muun" },
						{ id: "8iqka9cjnwq6x8xbrd4bw", label: "Phoenix" },
						{ id: "ykwgda29bagc89h44ntqj", label: "BlueWallet" },
						{ id: "igegxic8zxqpyataieza3", label: "Wallet of Satoshi" },
						{ id: "xe8ak23f6zjq92jpzp6d3", label: "Alby Wallet" },
						{ id: "c6bw6eaexhjdx24i4p8fc", label: "Strike" },
						{ id: "fk892k4wbgnxqqzjnbt7x", label: "Breez" },
						{ id: "rk2dxixwngwbbzfm4fqxc", label: "Other", isOther: true },
						{
							id: "prynxp9pgkre8e62kxcf6",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "7iz78jxnm2z3nk2pqrgbe",
					title: "Which platforms have you used for Lightning payments?",
					type: "checkbox",
					options: [
						{ id: "g4kidgpfe4patz37pyiwy", label: "Strike" },
						{ id: "brectt9yrq96p26hqhtda", label: "LNBits" },
						{ id: "je9tib7wh3npmztw2wixc", label: "Voltage Cloud" },
						{ id: "r3r4wq4difkjc784q8rhx", label: "BTCPay Server" },
						{ id: "iabdfx9jtiph6xkkwcdp3", label: "Breez" },
						{ id: "iy7b9q23647wjjpp8f9f6", label: "Cash App" },
						{ id: "irbxdw4pjhza6ij968k9c", label: "Alby Hub" },
						{ id: "hryxdw3c2bm37qytyyrhd", label: "Amboss Space" },
						{ id: "f6tnwqhphpjqdimcdxwwc", label: "Other", isOther: true },
						{
							id: "efm8hgk8kpwbtcmzyrjfh",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "ck4e8pmdejpxhreq3b9xa",
					title: "Which Lightning Network tools have you used?",
					type: "checkbox",
					options: [
						{ id: "r8dwqt43ky3y9xqypir6z", label: "ThunderHub" },
						{ id: "ayn6ffkfpxy7nfw4pbid7", label: "Ride The Lightning (RTL)" },
						{ id: "n9nex832eqwarn38mj7i4", label: "Lightning Terminal (LiT)" },
						{ id: "qiejccfc6c98cmiq8jzf3", label: "Balance of Satoshis (BOS)" },
						{ id: "8i8fmjiht48fngwptpa3a", label: "LNDg" },
						{ id: "fc29jx22iz4hzngmfry7b", label: "Charge-Lnd" },
						{ id: "aeyzhhp846964wcj66d6m", label: "Lightning Polar" },
						{ id: "bbrf433e6rw279nxbfw9b", label: "LND Managebot" },
						{ id: "cwmnkzaj3atnqb4aazmaf", label: "Amboss" },
						{ id: "bg3zxz39bydqmcf37zmtd", label: "Lightning Network+" },
						{ id: "4j4hw473wt2wtbaqqqbb2", label: "Lightning Pool" },
						{ id: "i6efdjxiw7tatpntfe8hb", label: "Lightning Loop" },
						{ id: "cga3ychncjqipwgat3je2", label: "Plebnet tools" },
						{ id: "c97jf4xbjcaki8x4tee6n", label: "Boltz Exchange" },
						{ id: "4eg222j83jfzm3pjh9fqa", label: "Other", isOther: true },
						{
							id: "wqeyt869ipggij6q3t37n",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "d7nn33qyxyr9awt2txa43",
					title: "What do you use the Lightning Network for?",
					type: "checkbox",
					options: [
						{ id: "3gjhmhfcjtzdactr7b67r", label: "Sending payments" },
						{ id: "2tz229kagtxm4n4gwjfci", label: "Receiving payments" },
						{ id: "gkj34ryrpe7wycyhnw6d9", label: "Online purchases" },
						{ id: "wfe4nt6hakgjrniq4zz6h", label: "In-person purchases" },
						{ id: "y4kh28bejrf2dgcc4d7zc", label: "Gaming" },
						{ id: "jm8j4xwet8xcr4j986ia6", label: "Content creation" },
						{ id: "ytcmx6aj39tqy492phd6a", label: "Content consumption" },
						{ id: "jh6qp49fkz987mjtyhr4b", label: "Streaming payments" },
						{ id: "2zyqepjxb7k2wr7xer3jk", label: "Podcasting 2.0" },
						{ id: "jz2krqxfbxadtzxm3rm8m", label: "Earning sats" },
						{ id: "k9khe7bpw232axb7am4gw", label: "Trading" },
						{ id: "n2xmccrip4z9q6jy39a3m", label: "Routing payments" },
						{ id: "gbz3g9xeegxy3fgga47kb", label: "Testing/development" },
						{ id: "jafmkwncfrad87pxznrg6", label: "Other", isOther: true },
						{
							id: "4fndjcmjn7n7bdka4p68b",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "hed4ttgmh69ekwh28mn73",
					title: "Which Lightning Network activities have you participated in?",
					type: "checkbox",
					options: [
						{ id: "rqc7r2zn3qynzejbj6c9q", label: "Opened channels" },
						{ id: "qt7mirxfykenfyi639k3h", label: "Closed channels" },
						{ id: "e9qqzwmyrgxb9kx92aiq6", label: "Balanced channels" },
						{ id: "qzpfr6jk3d9xgcc4atfik", label: "Routing payments" },
						{ id: "htpgxy4kzjgza7ggzgjp6", label: "Channel management" },
						{ id: "462dwb4ybjfka7am6emb6", label: "Fee management" },
						{ id: "gcm3i8997ai3686afn4dp", label: "Submarine swaps" },
						{ id: "hziji44wiiw7e7xhtccpn", label: "Loop in/out" },
						{ id: "33kwd26cpe8w44gwmgxbm", label: "Lightning Pool" },
						{ id: "h7pmd2cajm9dwhrqq37ai", label: "Dual funded channels" },
						{ id: "3dbkkbmd6iw7kqm3hkid3", label: "HTLC management" },
						{ id: "prz4igpx77fdg44ipwcxr", label: "Watchtowers" },
						{ id: "qe423hiin8xwa3n3293er", label: "Lightning address setup" },
						{ id: "xe6kceahjp3mfntbza7by", label: "Keysend payments" },
						{ id: "kdm8pgznq22gi7nd68bex", label: "AMP (Multi-path) payments" },
						{ id: "hyy4jkdwaqf9mg7xchf7n", label: "LNURL implementation" },
						{ id: "3qqmyknpim7bty3ycz4fp", label: "WebLN integration" },
						{ id: "twy9hk7ydy46f6mj479f8", label: "Other", isOther: true },
						{
							id: "b32ga8pechd969zyx3qq8",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "a67a7fq8n4tibnt9thxfn",
					title: "What challenges do you face with the Lightning Network?",
					type: "checkbox",
					options: [
						{ id: "tmzfrrer9mtzcfzf6h2ry", label: "Channel management" },
						{ id: "6jc2jenekpertgqfi36kn", label: "Fees" },
						{ id: "fftx2i97dnz8jnk8btnwc", label: "Network reliability" },
						{ id: "34yjtid3p3d7ixiicigkm", label: "Wallet compatibility" },
						{ id: "47zg3nfwjtg47ikcje6n6", label: "Privacy concerns" },
						{ id: "n4tmmgrrhcke3t8h3qik9", label: "Other", isOther: true },
						{
							id: "nqnxa8rb4ezbarwhewrfy",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
			],
		},
		{
			id: "9ppnb8rdaerw2m6mwtbxh",
			title: "Development Tools",
			description: "Bitcoin development experience and tooling preferences",
			questions: [
				{
					id: "qjyr3fw2kj3rjzkkmprr3",
					title:
						"Which programming languages do you use for Bitcoin development?",
					type: "checkbox",
					options: [
						{ id: "f4phxfjr8hkzqngjztnxp", label: "Python" },
						{ id: "weiyyigjp6jtmwyxte8w6", label: "JavaScript/TypeScript" },
						{ id: "3z3ah28gqwenihn8fkp6c", label: "C++" },
						{ id: "chcdbnp66hqayktab9qfc", label: "Rust" },
						{ id: "tbheirrdfcmb9mb234yrd", label: "Go" },
						{ id: "82jd387pykzx4qx6e46wc", label: "C# (.NET)" },
						{ id: "twg9qcre6zk9hiw2h4p3a", label: "Java" },
						{ id: "mjd7ktbzraa4wmjtxj6ik", label: "Ruby" },
						{ id: "2n83rditj6tekhr2cwt9p", label: "Other", isOther: true },
						{
							id: "wytbrbay6m7ji3hkr37z9",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "ekkjbbzazap3etyc3yeqh",
					title:
						"Which Bitcoin development libraries or frameworks have you used?",
					type: "checkbox",
					options: [
						{ id: "z7zf2b9p4wdnphagdghre", label: "bitcoinjs-lib" },
						{ id: "976bww8x6hhemt2w4q2bc", label: "BDK (Bitcoin Dev Kit)" },
						{ id: "hcye8nqx9ctxf2wqkayqb", label: "Libbitcoin" },
						{ id: "6adw686w77bttn4m7hp9k", label: "btcd" },
						{ id: "qerxk8ckc3py4j6whfjb9", label: "ElectrumX" },
						{ id: "hdw8ax3myx72hbwq324r8", label: "Other", isOther: true },
						{
							id: "66zgzchfd8jww4yf4icy3",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "hw38zmmz3ki9yxckmhd4p",
					title: "Which Bitcoin Core features have you worked with?",
					type: "checkbox",
					options: [
						{ id: "dymc7ny6trmkc7tf3pt6z", label: "Full Node" },
						{ id: "k9ea22xqtfnngcfhnq8w7", label: "Wallet Management" },
						{ id: "cmj97atfzfayph7g4cfjt", label: "RPC API" },
						{
							id: "h9bfa4c9cnh98ctejrtne",
							label: "PSBT (Partially Signed Bitcoin Transactions)",
						},
						{ id: "zzta4wnbwaq4eje7irq2z", label: "Taproot Deployment" },
						{ id: "h37a3cpiczmtyjkgtkye3", label: "Other", isOther: true },
						{
							id: "8rti4zen49xte7bmn73m6",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "wj9amq62d9qm98n7bkwwi",
					title:
						"What is your experience with Bitcoin Improvement Proposals (BIPs)?",
					type: "radio",
					options: [
						{
							id: "x6zpcgk74hk4dbgf2tifg",
							label: "Have authored one or more BIPs",
						},
						{
							id: "x8rgqqfdhdzqki72qrc44",
							label: "Have contributed to existing BIPs",
						},
						{
							id: "i6rdxthmmkd6azhp29wai",
							label: "Have reviewed or commented on BIPs",
						},
						{
							id: "pkcgabnx4aidig4xa829r",
							label: "Familiar with BIPs but haven't contributed",
						},
						{ id: "ddbqg6f963mwzpd8hckyj", label: "Not familiar with BIPs" },
					],
				},
				{
					id: "zcdrbgzgmy2m39izap8mx",
					title: "Which testing environments do you use?",
					type: "checkbox",
					options: [
						{ id: "d9f8xxm8manc3jndmjzd4", label: "Testnet" },
						{ id: "kgwiy463xaimjwyr6jyxq", label: "Regtest" },
						{ id: "7ytmxa2et62jfwdx7hjqw", label: "Signet" },
						{ id: "yzqg3643prqninqj4zqcz", label: "Bitcoind JSON-RPC tests" },
						{ id: "93n9xxppdqe47n2n7y8i9", label: "BIP174 PSBT Testing Tools" },
						{ id: "r36myfztcjgt8w8epyrgh", label: "Other", isOther: true },
						{
							id: "3njwb9y7kmtx94fr4a7zd",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "hprnjp9mq96x6pz96jt7i",
					title:
						"How important is Bitcoin Core compatibility in your development work?",
					type: "radio",
					options: [
						{
							id: "f8azr7iqf42gdeb344rf6",
							label: "Critical - must be compatible",
						},
						{
							id: "drbwkt3gr3wfh2wjirdyf",
							label: "Important but not critical",
						},
						{ id: "eftdhib7yafakenrtxpba", label: "Somewhat important" },
						{ id: "2gd794tje9bxk92qz2w8x", label: "Not important" },
						{ id: "wz7hrbzrfyq83mfar62fi", label: "Not applicable to my work" },
					],
				},
			],
		},
		{
			id: "jphjdpffcdmtqzee8qrdw",
			title: "Nodes & Infrastructure",
			description: "Bitcoin node operation and network participation",
			questions: [
				{
					id: "tpqefcfqzwyzqirbh6e22",
					title: "Which types of nodes have you run?",
					type: "checkbox",
					options: [
						{ id: "mbztgw3pzkynif6y9y37i", label: "Bitcoin Core (Full Node)" },
						{
							id: "h9mh8dnbtc2w3zdya34fk",
							label: "Pruned node (Bitcoin Core)",
						},
						{
							id: "gy8hjmbhwjx9p8rww8mrx",
							label: "Lightning Network Node (e.g., LND, C-Lightning)",
						},
						{ id: "mzyit2cdtfqahpbjrwp3t", label: "ord" },
						{ id: "jq9778drypfwer3xbet2f", label: "btcd" },
						{ id: "cka3adnj7pk8f7kqjbfxk", label: "Electrum Server" },
						{ id: "8xeehfgq68cxn3qktaq2i", label: "Other", isOther: true },
						{
							id: "e8ycr7jkjngrj726gxmyy",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "ywqi9enmegkxz6qqdjnnm",
					title: "Which node management tools have you used?",
					type: "checkbox",
					options: [
						{ id: "cigdac7qncerg8gc47rgx", label: "MyNode" },
						{ id: "76mwttfetia2icgyyb29i", label: "Umbrel" },
						{ id: "t84bre33wmacc9mz7386d", label: "RaspiBlitz" },
						{ id: "pamt3jgb6rp3z3jhxzy6y", label: "BTCPay Server" },
						{ id: "mf7xp6p9gzcc3ftzcd9dy", label: "Nodl" },
						{ id: "e4nzkyzrg4heh8k8qak9a", label: "Other", isOther: true },
						{
							id: "6f4jyj486gckyqpa24d88",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "3w2ab4na83efghdpxjp7n",
					title: "Which node monitoring tools have you used?",
					type: "checkbox",
					options: [
						{
							id: "cp7npiytc9kq66jp3tqzk",
							label: "ThunderHub (Lightning node)",
						},
						{ id: "2cebtk6d4gp9n4n4hayf9", label: "Ride the Lightning (RTL)" },
						{ id: "g97az2rmdmieriqirmz64", label: "Specter" },
						{ id: "8zxqt4gby9indxbq8mteq", label: "Mempool.space" },
						{ id: "m6r289qm3gr367b7dnffy", label: "Other", isOther: true },
						{
							id: "3iea7aan9ay3dgzk78aje",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "bkkgxk6fcei7qwptiahrw",
					title: "What is your experience with self-hosting block explorers?",
					type: "radio",
					options: [
						{ id: "wk7qgygid43zydaghzgay", label: "Currently self-hosting" },
						{ id: "4bkgj8xpdg3g33gyfdzre", label: "Previously self-hosted" },
						{ id: "fppeatkct9ajdntettxgn", label: "Planning to self-host" },
						{ id: "9awm4nrbxpjb6fn3kagnw", label: "Never self-hosted" },
						{
							id: "bmzxtb6df9nn9e7ty2ax7",
							label: "Not interested in self-hosting",
						},
					],
				},
				{
					id: "fhh6x7ii7y4wk87x9hg6r",
					title: "How do you connect your wallet(s) to a Bitcoin node?",
					type: "checkbox",
					options: [
						{
							id: "wepbwbddf8hfimfz326b4",
							label: "Directly (e.g., Sparrow with Bitcoin Core)",
						},
						{
							id: "xdrt6f2awzmwbqbtjx44h",
							label: "Through Tor (e.g., Wasabi, Samourai)",
						},
						{
							id: "hh8p77xt7i6ay4nty3eb8",
							label: "Via Electrum Personal Server",
						},
						{ id: "ara2xfy4g9p4cnmcpymfx", label: "Other", isOther: true },
						{
							id: "hktmg3qefnfyad394ceim",
							label: "I don't connect my wallet to a node",
							isNegative: true,
						},
					],
				},
				{
					id: "icbzq4w3qz6bw73mxd7p2",
					title: "Which privacy or networking tools do you use with your node?",
					type: "checkbox",
					options: [
						{ id: "ckcp83h4xpewhr6xdz84k", label: "Tor" },
						{ id: "qwxk3yw7d49zp9rcnry4n", label: "I2P" },
						{ id: "rb7frzz8qm6tkxkx3f388", label: "VPN" },
						{ id: "xb9bib22hi6qfngtabgcn", label: "Other", isOther: true },
						{
							id: "73mjzhc8w6k664rgk2hfa",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "diw6iaagjb3q2xfwci4kr",
					title: "How important is running your own Bitcoin node?",
					type: "radio",
					options: [
						{
							id: "hpadzhhrwa6fzgz48kyfk",
							label: "Essential to my Bitcoin usage",
						},
						{
							id: "d8rzhb23z26jyk44fz2c9",
							label: "Important but not essential",
						},
						{ id: "y3xnz2j977bgi7jmtdhrw", label: "Nice to have" },
						{ id: "227xh9w4ajykeaywqgtqk", label: "Not important" },
						{ id: "wb2d87iyepjafr8ccg6py", label: "No opinion" },
					],
				},
			],
		},
		{
			id: "dfjd4ihpaar8ktah8k4zy",
			title: "Mining",
			description: "Bitcoin mining activities and hardware usage",
			questions: [
				{
					id: "h64i3e2e6yzk7pp8xrkzh",
					title: "What type of Bitcoin mining have you participated in?",
					type: "checkbox",
					options: [
						{ id: "fixyfje7tgpyd7jxirajk", label: "Home mining" },
						{ id: "6a6je9f7kqxbt732xjewd", label: "Industrial mining" },
						{ id: "m3wzefg6gkqb476nkcdet", label: "Cloud mining" },
						{ id: "j8y7n82tzzgdyb4dbjbn8", label: "Mining pool operation" },
						{
							id: "dn9xyi3bp8wd2y6h6zhh3",
							label: "Mining hardware development",
						},
						{
							id: "dkejzra8je6qq98pjz43j",
							label: "Mining software development",
						},
						{ id: "pt2fyg8r62tkr9myrf7wa", label: "Other", isOther: true },
						{
							id: "ria6wthpdg8rz8m7ix3nk",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "d7tzk24iqfzmb9ghn8z4i",
					title: "Which mining hardware have you used?",
					type: "checkbox",
					options: [
						{ id: "ijfbgc3x9rnxd4amk3dpm", label: "ASIC miners" },
						{ id: "n3tb4n9w6jcktbmqbycga", label: "GPU mining rigs" },
						{ id: "eipey3f3ygc4pq6eczd46", label: "CPU mining" },
						{ id: "ei9idffw6zyf6jhwek6gp", label: "USB miners" },
						{ id: "x6y2829bwbgmgzeinj33y", label: "Other", isOther: true },
						{
							id: "ig96cabektqrwwhypiazr",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "hibga64wf9ngyznj4rt6m",
					title: "Which mining pools have you used?",
					type: "checkbox",
					options: [
						{ id: "6c24e6djzhe2igeztk9rp", label: "Antpool" },
						{ id: "akdqztk889niqi4p768th", label: "F2Pool" },
						{ id: "3cqy4zbhb4xcrbf6f4rtb", label: "Foundry USA" },
						{ id: "4pz3myz6rqkpmnab7hq28", label: "Binance Pool" },
						{ id: "29w83knmkmzwyd27wa82d", label: "ViaBTC" },
						{ id: "ecahifrzkrfnq2qhxhywq", label: "Poolin" },
						{ id: "wbrzwt8qqktyh4n9wm349", label: "SlushPool (Braiins)" },
						{ id: "ert44emh7t99j9dmnic36", label: "MARA Pool" },
						{ id: "emawdtyrg9bx4fk43fhey", label: "Other", isOther: true },
						{
							id: "etiitg8nhcgiw78kwm9ww",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "x9tht6fhbgh6hyy2ewx89",
					title: "What mining software have you used?",
					type: "checkbox",
					options: [
						{ id: "gbkkybgb2ia4epq3kgnir", label: "CGMiner" },
						{ id: "z3njrea6z4gg37cfc3f42", label: "BFGMiner" },
						{ id: "nepb8jdthcgw68j4t7x6f", label: "Braiins OS" },
						{ id: "xwjaw337twzdap7k4d6e9", label: "MultiMiner" },
						{ id: "cbmzgy7bg29peih499cyz", label: "Awesome Miner" },
						{ id: "i4ixqgggmmjrifaeb494c", label: "Other", isOther: true },
						{
							id: "2m2whjanbcj4a3q6hdkzg",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "8e3mq8y6a9zqhxc6ieq2y",
					title: "What is your primary motivation for mining Bitcoin?",
					type: "radio",
					options: [
						{ id: "r47ki27f6gnhhenbmhqtw", label: "Profit" },
						{ id: "zxihj2gazy3taek62nxx8", label: "Network security" },
						{ id: "ez23bhip9qxpdxzjgx8na", label: "Learning/experimentation" },
						{
							id: "f38ieg4qxhayrh49bdc4e",
							label: "Privacy (KYC-free bitcoin)",
						},
						{ id: "ytfpgrhzhjnirq7phgmdb", label: "Heat generation" },
						{ id: "3f62mrt2nk6dr3wxbrgba", label: "Other", isOther: true },
					],
				},
				{
					id: "fpph4q4zk2kq9wtidt79e",
					title: "What challenges have you faced with Bitcoin mining?",
					type: "checkbox",
					options: [
						{ id: "ie2b8dtjg47pewdkmwe7k", label: "High electricity costs" },
						{ id: "rwbqr39bdr3e2gpkf28r4", label: "Hardware availability" },
						{ id: "7p4gkb4i44m3h7aygi6jr", label: "Heat management" },
						{ id: "jm7nhwjghwht4ecwcymmd", label: "Noise management" },
						{ id: "29yftditb47peawbkc936", label: "Technical complexity" },
						{ id: "jipabmmrkhcm89t6e7246", label: "Regulatory concerns" },
						{ id: "qfi8qzxwf7fzx4e3f64ac", label: "Profitability" },
						{ id: "nbaepaqr4pwdw7mnqbp7i", label: "Other", isOther: true },
						{
							id: "etn6iwgjrmzq98cg4pi86",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
			],
		},
		{
			id: "fwaktqwyqki893zxt6t6z",
			title: "Privacy Tools",
			description: "Experience with Bitcoin privacy enhancement tools",
			questions: [
				{
					id: "48gf7eypwndte3tywznnm",
					title: "Which Bitcoin privacy tools have you used?",
					type: "checkbox",
					options: [
						{ id: "qxzwny9xmgaefpmj3r7cb", label: "Wasabi Wallet" },
						{
							id: "x7rhrfk2zdga2h8wnfh66",
							label: "Samourai Wallet (before seizure)",
						},
						{ id: "dn9begyf44ncx2pqm8fpg", label: "JoinMarket" },
						{ id: "zzptkjkd464ehk83pgi72", label: "Whirlpool" },
						{ id: "ay9jrd4tapa9zqjdhne72", label: "PayJoin" },
						{ id: "qgtc422fbwrwtgwhrdkcy", label: "Other", isOther: true },
						{
							id: "bh222cj6n73azgrpce4xj",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "xtyyktkj7czjjhh63cy92",
					title: "What is your experience with CoinJoin?",
					type: "radio",
					options: [
						{ id: "ifyx348nr3zqtgte283kg", label: "Regular user" },
						{ id: "894rg6r26464qbmjdgfrk", label: "Occasional user" },
						{ id: "hhapyiqgtbdwzenga8qit", label: "Have tried it once" },
						{ id: "chxrtf93yp2pw3gk2czdp", label: "Familiar but haven't used" },
						{ id: "jfke6t3yxf24m37a7ep8j", label: "Not familiar" },
						{ id: "3c47ktcccnj3zd9ca462t", label: "Prefer not to answer" },
					],
				},
				{
					id: "aatk3p37ih779recitd6n",
					title: "How would you rate the usability of Bitcoin privacy tools?",
					type: "radio",
					options: [
						{ id: "h7c8z8fpejaw4xnjatt9z", label: "Very easy to use" },
						{ id: "3m4en3fab8g9h49hdzhri", label: "Somewhat easy to use" },
						{ id: "dhawyzcbyzqr97pb4ia3e", label: "Neutral" },
						{ id: "7tz8j6q8n6p6zwx6fjfr7", label: "Somewhat difficult to use" },
						{ id: "pjni92wh3jin6cjrx43w7", label: "Very difficult to use" },
						{ id: "pf7g27wydnw8tr3rmnwyc", label: "Haven't used them" },
					],
				},
				{
					id: "gc98jeagzn7wn6xbtatpb",
					title: "How important is Tor usage in your Bitcoin transactions?",
					type: "radio",
					options: [
						{
							id: "wy99whj2qx6d7bi2hm3aa",
							label: "Essential for all transactions",
						},
						{
							id: "wx4tnzeex2g3inft22bpt",
							label: "Important for some transactions",
						},
						{
							id: "krpgendan9rrrh4gkpja3",
							label: "Nice to have but not required",
						},
						{ id: "y2x4c7c7dqfkbx4a7izn7", label: "Not important" },
						{ id: "mfix6za32z249jrz79f7n", label: "Don't use Tor" },
					],
				},
				{
					id: "8dzbk8w4a2rw8maae8pi4",
					title: "Which methods do you use to enhance Bitcoin privacy?",
					type: "checkbox",
					options: [
						{ id: "q2fqtj6mdpfat34iyzphc", label: "Coin Control" },
						{ id: "nywniziw8wf4aye97d7pk", label: "Avoiding address reuse" },
						{ id: "kqf9x8n6atz4nj4kyx8dx", label: "Tor" },
						{
							id: "97ffhy22dzjirx23kfwfb",
							label: "Chain analysis countermeasures",
						},
						{ id: "m3y4hpt34hj392cpbedhg", label: "Multiple wallets" },
						{ id: "bmef48pcizrf73gh9jjb3", label: "Other", isOther: true },
						{
							id: "jdi33rjetmn48fkc23mzt",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "iiidx2ymqmd2qf8jyer6d",
					title: "What challenges have you encountered with privacy tools?",
					type: "checkbox",
					options: [
						{ id: "hh9baj36ntzdz2bq2mcm8", label: "High fees" },
						{ id: "kb6rz833hq3panckntcea", label: "Low liquidity" },
						{ id: "6whhd3k9bjnh2ybyfhjxx", label: "Technical difficulty" },
						{ id: "ma6grzi97nibtnpkw9i4j", label: "Slow transaction times" },
						{ id: "z3xfrchy47gmejzq7fajh", label: "Compatibility issues" },
						{ id: "x8ieaaeb2k233wtc47den", label: "Other", isOther: true },
						{
							id: "6xmfy6id6i4geti4mdtd4",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
			],
		},
		{
			id: "437689a9769wd7rkhhw3k",
			title: "NFTs, Art, & Tokens",
			description: "Involvement with Bitcoin-based digital assets",
			questions: [
				{
					id: "mqb8bnnaza429zbzhk9w8",
					title: "What is your experience with Bitcoin art?",
					type: "radio",
					options: [
						{ id: "nhqwzcewapdryfafr33h6", label: "Active user/creator" },
						{
							id: "fpbzx4qemegnnxt4njhkf",
							label: "Have experimented with them",
						},
						{ id: "77nhpbtd2pj8yrpjjw4ih", label: "Familiar but haven't used" },
						{ id: "ywfbjxgrygaict9yzeiy4", label: "Not familiar" },
						{ id: "hh28h4f43rbxk2ddzck32", label: "Not interested" },
					],
				},
				{
					id: "bdpxyh8y2j8bimhbmermx",
					title: "What is your experience with these ecosystems?",
					type: "checkbox",
					options: [
						{ id: "gezhgxxk6z7qgq8mhwfhn", label: "BRC-20" },
						{ id: "fkirg9ryf37pgpebzqd6i", label: "Runes" },
						{ id: "idf2an37z2ihcjxhf2rph", label: "Ordinals" },
						{ id: "hfpkt7taw949n4niqibpb", label: "Counterparty" },
						{ id: "az4ibcqqa8eejmxhrbtw8", label: "Other", isOther: true },
						{
							id: "mm8rqqhieakyed6fj4w8i",
							label: "Not interested",
							isNegative: true,
						},
					],
				},
				{
					id: "p3twi38t2cwk6yz3nn8xc",
					title: "Which Bitcoin art / tokens platforms have you used?",
					type: "checkbox",
					options: [
						{ id: "nbpzcrcce9yert69hrepe", label: "Ordinals Wallet" },
						{ id: "e26bjm3mrp6jwawecd346", label: "Gamma.io" },
						{ id: "dkjzjrpfwc99dziewaaq4", label: "Magic Eden" },
						{ id: "x2wzhnn4h79afbiikm8ea", label: "UniSat" },
						{ id: "redwykk2kg9t7q267act7", label: "Other", isOther: true },
						{
							id: "h8yby3ithkm96grjz7g77",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "j7x6ykp62g3qft9ni4ibe",
					title:
						"Which wallets have you used for Ordinals, Runes, and BRC-20s?",
					type: "checkbox",
					options: [
						{ id: "xjttdh4eb99mytgzyid28", label: "Sparrow Wallet" },
						{ id: "fwrm76zgkbqre44j3n2yy", label: "Xverse Wallet" },
						{ id: "zqfcbb4q666teea8iih9a", label: "Oyl Wallet" },
						{ id: "a4786pywkwgk9dptk899p", label: "Hiro Wallet" },
						{ id: "mxw8j9k79mbbprmaxgphz", label: "UniSat Wallet" },
						{ id: "iahefezb47fp76pz3xjcz", label: "Other", isOther: true },
						{
							id: "7pza7iib392y249zbqtrk",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "g6pwjeqkcnrj6qpfpbaat",
					title:
						"Which Bitcoin-based art or NFT communities have you participated in?",
					type: "checkbox",
					options: [
						{ id: "qbarw2rat4nbkmdqd7jgg", label: "Rare Pepe Community" },
						{ id: "66karjrg9zdcywbbda47d", label: "Taproot Wizards" },
						{ id: "bm7njfxq26e4hixppd94a", label: "Quantum Cats" },
						{ id: "ecbbjr6etc343q3rtd386", label: "Ordinals Community" },
						{ id: "e3fanatfqqtanwaewdf4w", label: "Counterparty Community" },
						{ id: "tpm4he6h42f7k3e7rhnec", label: "Other", isOther: true },
						{
							id: "89mhiywewc6wyi7dew6yh",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "pdzjg9hrxxij3knrny4d6",
					title: "How do you use Bitcoin art and tokens?",
					type: "checkbox",
					options: [
						{ id: "3hckp6kxy8at64ygzqzgy", label: "As collectibles" },
						{ id: "hdcwa9j36c8qz376xxwnn", label: "As a store of value" },
						{ id: "jangapwncwthbin3pahkj", label: "For trading" },
						{ id: "x2ccbykz76trez4eid9zr", label: "For art creation" },
						{ id: "y4ffrymc7yd46mferxkhq", label: "Other", isOther: true },
						{
							id: "h9mexnczk84mj88mtp62g",
							label: "Don't use them",
							isNegative: true,
						},
					],
				},
				{
					id: "xwcrbxwi4mxyk4hgpy49n",
					title:
						"What challenges have you encountered with Bitcoin art and tokens?",
					type: "checkbox",
					options: [
						{ id: "az2zgxx6pgcxnbnba4r86", label: "High fees" },
						{ id: "p34hhacxmgbipayqndkpd", label: "Low liquidity" },
						{ id: "ctkzzzzf3hrx6cy6gt3gh", label: "Lack of marketplaces" },
						{ id: "hhj263q7id7cz3mx8emdh", label: "Technical complexity" },
						{ id: "7tdbj8igayi9xmyc3d7fz", label: "Other", isOther: true },
						{
							id: "33d3wczx4hxax6q3b79ra",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "zaxcqw6tenrfpc8iqhpa3",
					title:
						"How do you feel about the presence of art and NFTs on the Bitcoin blockchain?",
					type: "radio",
					options: [
						{ id: "8et374knggz3mi64ppbrx", label: "Very Negative" },
						{ id: "e732gqfj7zynjk96bkdwc", label: "Somewhat Negative" },
						{ id: "i2nda362wdm3764y4cq6c", label: "Neutral" },
						{ id: "cbwyknnjadz2yt3n9xdxm", label: "Somewhat Positive" },
						{ id: "cyy7nrg74eb8kdxtw2b7b", label: "Very Positive" },
					],
				},
			],
		},
		{
			id: "phk3f8wwxkywxeydabn8b",
			title: "Conferences & Community",
			description: "Participation in Bitcoin events and social groups",
			questions: [
				{
					id: "ep8663h7yy3fhepky4q22",
					title: "Which Bitcoin conferences have you attended?",
					type: "checkbox",
					options: [
						{ id: "zbmtymbw4nq39yaxyf33n", label: "Baltic Honeybadger" },
						{ id: "2m7gmtpqy783gccct6far", label: "Bitcoin Amsterdam" },
						{ id: "32n2ktj7e9kxtrmq84r2w", label: "TABConf (Atlanta)" },
						{
							id: "98bitrdjdcnpkrgmiw4gk",
							label: "Adopting Bitcoin (El Salvador)",
						},
						{ id: "j2g6bxn7kfawqqipty64g", label: "Bitcoin Conference (US)" },
						{
							id: "7nz9x9bpriea7qynnmyjg",
							label: "Unconfiscatable (Las Vegas)",
						},
						{
							id: "2tx2ixmzceyre93gt766j",
							label: "Bitcoin Mining Disrupt (Miami)",
						},
						{ id: "ardxxfii4dtrem23hxxhk", label: "Bitcoin++ (Austin)" },
						{ id: "egebrt7x499xhhz7mj97p", label: "BitBlockBoom (Dallas)" },
						{ id: "niwc82ygihm39wyk3e6wk", label: "LaBitConf (Latin America)" },
						{ id: "nmmfbjb3j6twdagk9hwen", label: "Bitcoin Africa Conference" },
						{
							id: "mbyi8napca6z2kejfnd92",
							label: "Bitcoin Austria Conference",
						},
						{
							id: "ib3azbw2h89xcex2rprpg",
							label: "Advancing Bitcoin (London)",
						},
						{ id: "ppr2didwm8pf9939ebqar", label: "Other", isOther: true },
						{
							id: "3mqc6w49ijxxmg2gwhrcq",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "npy3dwfew7y9qkig79nxg",
					title: "What is your involvement with Bitcoin events?",
					type: "radio",
					options: [
						{ id: "4fnw7y6bnfwdbmwf7nkya", label: "Regular speaker/organizer" },
						{
							id: "8632kketirym7pe4air2y",
							label: "Occasional speaker/organizer",
						},
						{ id: "ktqgemfw6nxikyrcgtc6i", label: "Regular attendee" },
						{ id: "zergcbpfn6cje76cn8g6q", label: "Occasional attendee" },
						{ id: "2jkd7hde3jpeahgm2b2am", label: "Virtual participant only" },
						{ id: "bbnxamqcqm2hn34zwr723", label: "No involvement" },
					],
				},
				{
					id: "bbzfjp9wdyhyzgqtwbyhz",
					title:
						"Which Bitcoin-related social media communities do you participate in?",
					type: "checkbox",
					options: [
						{ id: "3k9ie2wa849irtqc9d7b9", label: "Twitter/X" },
						{ id: "3gyiajw3xb77ytwktgdej", label: "BitcoinTalk" },
						{ id: "ba9eegapdpee69d7yy39y", label: "Reddit" },
						{ id: "3ai6qtwqkw492hbreebwh", label: "Nostr" },
						{ id: "jh64kdcz7chyjq2bhzqkc", label: "Stacker News" },
						{ id: "ai8dydkmnrcdmjydbx96g", label: "Telegram groups" },
						{ id: "dtxj997qhp93xjzyb6qeb", label: "Mastodon" },
						{ id: "7wjq6aq9fz963aggjiqez", label: "Discord" },
						{ id: "zm9g3rzkafhxi7bhk63pg", label: "Signal groups" },
						{ id: "29ge6mheganr7nkz869it", label: "LinkedIn" },
						{ id: "6rqa4wfdba92i3w2wmidr", label: "Other", isOther: true },
						{
							id: "wq43xymcf6bwfemf8r72d",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "wgnpejb3p2whei6a32z98",
					title: "Which Bitcoin newsletters do you read?",
					type: "checkbox",
					options: [
						{ id: "jdigmw7gje9qc9jfptzhb", label: "Bitcoin Optech" },
						{ id: "brhkfqge24cmq9cxfnzii", label: "The Bitcoin Times" },
						{ id: "qkr63q7yk82zrfm2wcytb", label: "Nakamoto" },
						{ id: "xg3mix96qb8qf8j9hfx6f", label: "Satoshi's Journal" },
						{ id: "k92xqxgiqxixgte3m9pnx", label: "The Daily Bit" },
						{ id: "h8p46mpraxz3ktimfqam6", label: "Marty's Bent" },
						{ id: "kc8i28qaqwdnrrfn8xfqn", label: "Bitcoin Magazine Pro" },
						{ id: "kk33xkqremhzcmbgdahiq", label: "Other", isOther: true },
						{
							id: "hbmd2t9hxdiamim4cezg3",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "ni8ktfyep7rr62b6kzr6a",
					title: "Which Bitcoin podcasts do you listen to?",
					type: "checkbox",
					options: [
						{
							id: "cxdejgtqfw9ftekgmtdre",
							label: "What Bitcoin Did Podcast / Mr. Obnoxious",
						},
						{ id: "4iqdc446i8cdapn6fwyrk", label: "Tales from the Crypt" },
						{ id: "e3tgna89rza4x3c2zpty3", label: "Rabbit Hole Recap" },
						{ id: "jjak3pjn9ifra9tb4czcr", label: "Citadel Dispatch" },
						{ id: "49fzpcity2xnt3dhm6edn", label: "Bitcoin Audible" },
						{ id: "kdmw9gmhycfrp2eqmgpry", label: "Stephan Livera Podcast" },
						{ id: "xkicf73z3khjzi9n9n9nb", label: "Bitcoin Magazine Podcast" },
						{ id: "rernrr2timaznbt82bekm", label: "The Mempool" },
						{ id: "pkdrr7n9t6jdw8jqwin2j", label: "Other", isOther: true },
						{
							id: "pr6qezqnctktg4ny3fen9",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "mzh8cbfr9mz43ifh2ygw9",
					title: "How do you prefer to engage with the Bitcoin community?",
					type: "radio",
					options: [
						{
							id: "9wpbr7cg7zb9xzinkg4cc",
							label: "Primarily in-person events",
						},
						{
							id: "hj9wee4qhjrdda9cmeng3",
							label: "Primarily online communities",
						},
						{
							id: "kbnebbbrm3e3mcwtqynqp",
							label: "Mix of online and in-person",
						},
						{ id: "pqm9x4gjhkifpbi2akedj", label: "Passive consumption only" },
						{
							id: "ziimffdikj4zhb2t9ifw6",
							label: "Don't engage with the community",
						},
					],
				},
			],
		},
		{
			id: "p28tin42kj6jaxd7ifqd7",
			title: "Learning Resources",
			description: "Bitcoin education and knowledge acquisition methods",
			questions: [
				{
					id: "tekazcpq8bwya3i4brb3e",
					title: "How do you learn about Bitcoin?",
					type: "checkbox",
					options: [
						{ id: "4na89xrh29m3kxpftpnzh", label: "Books" },
						{ id: "hafr4iqxrp9xtx8a48h2h", label: "Online tutorials" },
						{ id: "cij9jm9xbhip7nyjncj24", label: "Video courses" },
						{ id: "mgem93k2ay383rdfdtt4f", label: "Podcasts" },
						{ id: "attbhy7ykmppm2qwzgge8", label: "Technical documentation" },
						{ id: "z47ymea9dpirxhnxpn6tr", label: "Community discussions" },
						{ id: "y4h2q7cp8ghcmbgczw8qc", label: "Other", isOther: true },
						{
							id: "4fxgagzcg2agdxmygwy96",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "d6grjz6dynabztpm7yakk",
					title: "Which Bitcoin books have you read?",
					type: "checkbox",
					options: [
						{
							id: "y6gmc43rrd4mgrqeaj2yy",
							label: '"The Bitcoin Standard" by Saifedean Ammous',
						},
						{
							id: "iqw33mz9xey8twj6wfqdi",
							label: '"Mastering Bitcoin" by Andreas Antonopoulos',
						},
						{
							id: "e4d4hiz2phxwcicwc2eky",
							label: '"Inventing Bitcoin" by Yan Pritzker',
						},
						{
							id: "4enzk34aheepekrpqrik8",
							label: '"The Bullish Case for Bitcoin" by Vijay Boyapati',
						},
						{
							id: "tdfbmindwc34q8i4gdbjb",
							label: '"The Price of Tomorrow" by Jeff Booth',
						},
						{
							id: "6yb6wz8bz2jyfhixptrdb",
							label: '"Layered Money" by Nik Bhatia',
						},
						{
							id: "qcbha9jqgdqcwezi3gew3",
							label: '"Programming Bitcoin" by Jimmy Song',
						},
						{ id: "fq8h7txpiee87gf2iyk6x", label: "Other", isOther: true },
						{
							id: "b44cg3m7nftq6xe3zfjpm",
							label: "None of the above",
							isNegative: true,
						},
					],
				},
				{
					id: "k8grxzynhwdt3f9mk2xhq",
					title: "What is your experience with Bitcoin development courses?",
					type: "radio",
					options: [
						{
							id: "d8azna8gf6mgn8x4k6fwx",
							label: "Have completed multiple courses",
						},
						{ id: "pngbqimdkfzqcdgq44bxt", label: "Have completed one course" },
						{
							id: "x9g4c32e2dqq9gm8nit6m",
							label: "Currently enrolled in course(s)",
						},
						{ id: "68pk7wjphcjdxejf3zdxq", label: "Planning to take courses" },
						{
							id: "442xt7apn68cpizymgrnn",
							label: "No interest in development courses",
						},
					],
				},
				{
					id: "chhxtkq7aawn2ngdh7i24",
					title: "What challenges do you face when learning about Bitcoin?",
					type: "checkbox",
					options: [
						{
							id: "im6wcwtfyeckj6aeiiqrd",
							label: "Finding updated information",
						},
						{
							id: "y6cg4i4q8ziyhrdgfy24g",
							label: "Understanding technical concepts",
						},
						{ id: "fwcfktt6njw4867twr3kq", label: "Lack of time" },
						{ id: "tw9d8wbehtbtm9pgrcpn7", label: "High cost of courses" },
						{ id: "yk78bpd468czbaqhbhccf", label: "Information overload" },
						{ id: "9i7mnr6tw97fc68zahpi6", label: "Other", isOther: true },
						{
							id: "6y9jrznd44emaj3g4bxxy",
							label: "No significant challenges",
							isNegative: true,
						},
					],
				},
			],
		},
		{
			id: "xn26zchentm6cqyqkanq2",
			title: "About You",
			description: "Demographics and personal Bitcoin journey details",
			questions: [
				{
					id: "ew4m627xnggetpbw9a6qy",
					title: "How long have you been involved with Bitcoin?",
					type: "radio",
					options: [
						{ id: "qpqw9m2x8cggrjr9g3c8g", label: "Less than 1 year" },
						{ id: "nx73w2ickd3i7i8d4a2zm", label: "1-2 years" },
						{ id: "pdyb26yh9zxw72dm3qwk7", label: "3-5 years" },
						{ id: "epi2epz2bpr3jp4c6dyhe", label: "More than 5 years" },
					],
				},
				{
					id: "khidygyj3f62wmh7m7k3t",
					title: "What is your primary involvement with Bitcoin?",
					type: "radio",
					options: [
						{ id: "369z8met6rkdw6nwrm67a", label: "Investor/Holder" },
						{ id: "ei7nnibtqedb2g2yzdhgb", label: "Developer" },
						{ id: "c4xfi3zi8wh2c42dxxqcn", label: "Educator" },
						{ id: "t4hneie9kh8qrkd6nnjye", label: "Content creator" },
						{ id: "xmgbtxbpxk87wp72gigdj", label: "Entrepreneur" },
						{ id: "myip3tjh9gfqn7hw6mw8y", label: "Miner" },
						{ id: "3d9448pm29kde8q2fn6ka", label: "Other", isOther: true },
					],
				},
				{
					id: "fr3k6zgja7rkrjidmjccc",
					title: "How frequently do you use Bitcoin?",
					type: "radio",
					options: [
						{ id: "zmqpjfmzg6ggmijdwbgn8", label: "Daily" },
						{ id: "p7cfzae8kh6jm786cp828", label: "Weekly" },
						{ id: "q6hymrdakrrkmmqxprbi9", label: "Monthly" },
						{ id: "z62yy637k9zgdf2fhtnc4", label: "Rarely" },
						{ id: "34w9zq2dpkhtrir29z7ix", label: "Never" },
					],
				},
				{
					id: "kj9gi87fq3qpr42ch3tg2",
					title: "How would you describe your technical knowledge of Bitcoin?",
					type: "radio",
					options: [
						{ id: "bdqhjjqkgtqd6nzd8c9rr", label: "Beginner" },
						{ id: "rrzy94ycmqz24xyy7rprr", label: "Intermediate" },
						{ id: "n8p7pajq8tctgmfp74fcp", label: "Advanced" },
						{ id: "bn7ghmhdtmeabizgi8pz9", label: "Expert" },
					],
				},
				{
					id: "xppacxzrhi7k2zcbnfw68",
					title: "What is your current profession or primary role?",
					type: "radio",
					options: [
						{ id: "q39meh4qd78zghwxrj2fg", label: "Developer/Engineer" },
						{ id: "3q438r27r7qhmf34xqrec", label: "Researcher/Academic" },
						{ id: "f9pnb6ifgmi47y9qjiy87", label: "Investor" },
						{ id: "kkzwxhnk3dr6468qpjcpq", label: "Educator/Content Creator" },
						{ id: "xwfx327kqgx3whmhb86ci", label: "Community Organizer" },
						{
							id: "64pq3a9fti9r2mtne24md",
							label: "Financial Services Professional",
						},
						{ id: "febzemax2hd8c2kk2pf88", label: "Miner" },
						{ id: "qcnj7bhgyirwhrjkn4did", label: "Entrepreneur" },
						{ id: "7tbc74zznjqcxbnwtxwxw", label: "Other", isOther: true },
					],
				},
				{
					id: "9rqddc8ixh29yy44ajhn6",
					title: "What is your age range?",
					type: "radio",
					options: [
						{ id: "4f4y9jg8ian89ktbhik3x", label: "Under 18" },
						{ id: "wpr6ttnjyqpmyy64yjked", label: "18-24" },
						{ id: "qr24qkdjdkmk2e3bfb69e", label: "25-34" },
						{ id: "9eezyx6gdpj69yhmzm4z3", label: "35-44" },
						{ id: "hg3mbh9tc9f34d2j3nhmz", label: "45-54" },
						{ id: "idzrrn4xnbzrwf28f7fag", label: "55-64" },
						{ id: "wccarkjd9dca889gicekc", label: "65+" },
						{ id: "bjk2d6296322a9keierxj", label: "Prefer not to say" },
					],
				},
				{
					id: "mixpkemzkxm4bnqex9kwy",
					title: "What is your highest level of education?",
					type: "radio",
					options: [
						{ id: "bkz3czigpt2e38xanmiyp", label: "High school or equivalent" },
						{ id: "m7bt9be7nae29qa9zh3dk", label: "Associate's degree" },
						{ id: "9y27qgjwfbmkm324rp8fb", label: "Bachelor's degree" },
						{ id: "bb37dzwxrm4j3mkjn38pg", label: "Master's degree" },
						{ id: "icme7q8x8pzzzzfndgbf6", label: "PhD or equivalent" },
						{ id: "kzm28cawpbhw23r36gkn3", label: "Other", isOther: true },
						{ id: "qz2h378xjyk7fbwzfab4t", label: "Prefer not to say" },
					],
				},
				{
					id: "biwxjd36m2eyanej6zf46",
					title: "In which country do you currently reside?",
					type: "text",
				},
				{
					id: "mecara39zidmzf8wj8epy",
					title: "What is your gender?",
					type: "radio",
					options: [
						{ id: "h9ba8dac6e8zdipxfyqk6", label: "Male" },
						{ id: "bpfpr44h6wjmpftbxzfxz", label: "Female" },
						{ id: "kf3ti3kgnfww87hwd7pzn", label: "Other", isOther: true },
						{ id: "da6zrbi2iahx3b363kgia", label: "Prefer not to say" },
					],
				},
				{
					id: "th2nw2w23ajr7f4jwkrph",
					title: "How would you describe your political views?",
					type: "radio",
					options: [
						{ id: "mh3mc8p4kka837x7g8diz", label: "Conservative" },
						{ id: "qg39j8k27efh7fgzjzjyw", label: "Liberal" },
						{ id: "qizzee7q86dwni4qg3xqw", label: "Libertarian" },
						{ id: "28myn78ed8qyw9hgy3eay", label: "Apolitical" },
						{ id: "zncjtrykicdbmgtnxn33w", label: "Other", isOther: true },
						{ id: "9af2mcjdpiq87498x4ceb", label: "Prefer not to say" },
					],
				},
				{
					id: "zeicyxgxnhg998htmqycf",
					title: "What is your level of engagement with Bitcoin communities?",
					type: "radio",
					options: [
						{
							id: "rzh6myfqefj8dkf9p99ce",
							label: "Very engaged (daily participation)",
						},
						{
							id: "kfg4ddd9b9yxf7tq73tmw",
							label: "Moderately engaged (weekly participation)",
						},
						{
							id: "txk4r2tpqkh3dzecfy9en",
							label: "Occasionally engaged (monthly participation)",
						},
						{ id: "7ayagiap6k4ipzcqaxe4z", label: "Rarely engaged" },
						{ id: "9i7bzdn3p6zfiz9f3nm4h", label: "Not engaged" },
					],
				},
				{
					id: "exc3eekqtjtq3ndp9xkpe",
					title: "What is your primary motivation for using Bitcoin?",
					type: "radio",
					options: [
						{ id: "renb89x3w7b9agirzd676", label: "Investment/Store of value" },
						{ id: "8rpetw3zzdzni6qhzetdh", label: "Technology interest" },
						{ id: "6pcpgwyd83tmarm2ck2gf", label: "Financial sovereignty" },
						{ id: "tw7tmqdwxzna9n7cd3e8i", label: "Privacy and freedom" },
						{ id: "8az2e7bmbpzg3wa32fzi3", label: "Professional development" },
						{ id: "g32jmxcaz9cykpkrrt44m", label: "Other", isOther: true },
					],
				},
				{
					id: "p2ctqbew4nmg2xgy4yrkh",
					title: "Have you used other cryptocurrencies?",
					type: "checkbox",
					options: [
						{ id: "82bznhtn4zaerzacrkpew", label: "Ethereum" },
						{ id: "8h4pb3bae7r7jy23ndcpq", label: "Solana" },
						{ id: "qx3wprtkg83kda9mbi6kk", label: "BNB" },
						{
							id: "m9q6g9nya689nw9hna77a",
							label: "Stablecoins (USDC, USDT, etc)",
						},
						{ id: "jqcabtgg7nd9hwmw9a983", label: "Other", isOther: true },
						{
							id: "49zbtqcpb9x4dggyr4xpt",
							label: "Bitcoin only",
							isNegative: true,
						},
						{ id: "entrxzwe9e7kiczphd9bd", label: "None", isNegative: true },
					],
				},
				{
					id: "c6p3i863cd6ehp3w8xwf6",
					title: "What is your annual income range?",
					type: "radio",
					options: [
						{ id: "e8fifzekmrkcjfqcfat4n", label: "Under $25,000" },
						{ id: "j2jwk3tw6ranqeyifmrdy", label: "25,000–$50,000" },
						{ id: "emtdw8kyt4pm64bd8aqbm", label: "50,000–$100,000" },
						{ id: "tbq9idyipakfzqxbhacnm", label: "100,000–$250,000" },
						{ id: "rqgxb4axqjmcqkke7t4wh", label: "Over $250,000" },
						{ id: "x4fagdkp987xkwmqptrhr", label: "Prefer not to say" },
					],
				},
				{
					id: "3etfzfgi2g9qzf9j6n6nq",
					title: "What best describes your Bitcoin strategy?",
					type: "radio",
					options: [
						{ id: "e2wbygtxtcwyr7egqd2jr", label: "Long-term holder (HODL)" },
						{ id: "mz2ykty4e6zw9zjkqmkjq", label: "Active trader" },
						{ id: "bb7ib6mfxxanqr7izkydy", label: "Developer/Builder" },
						{ id: "irhnjxtnjc6nejty3zpgx", label: "Privacy-focused user" },
						{ id: "73gd268dengpacqcdkid6", label: "Other", isOther: true },
					],
				},
				{
					id: "gt3x4n39m2gnt2z2cdfxe",
					title: "What is your relationship with Bitcoin maximalism?",
					type: "radio",
					options: [
						{ id: "cm7brbb8n4wk8wzajn2ab", label: "Strong Bitcoin maximalist" },
						{
							id: "jicr2emxf2ab28zcmwfwh",
							label: "Moderate Bitcoin maximalist",
						},
						{
							id: "bknrmdjnwkz7pp79d72w3",
							label: "Bitcoin-preferred but not maximalist",
						},
						{ id: "92b93b8cbxzzi6we69bjk", label: "Cryptocurrency generalist" },
						{
							id: "yg723afx9dg9f6h463rem",
							label: "Not familiar with the term",
						},
						{ id: "4pywjcy22iyiz3h7dxhy9", label: "Prefer not to say" },
					],
				},
				{
					id: "gww7n8227fe84rj4y9tz4",
					title: "Where did you hear about this survey?",
					type: "text",
				},
				{
					id: "tgmm7mrq6b6iy7yf7wedf",
					title: "How could this survey be improved?",
					type: "text",
				},
				{
					id: "ryjbkmewprwr6k4aetgt6",
					title:
						"Would you like to be notified when the survey results are released?",
					type: "radio",
					options: [
						{
							id: "hzff3x6ez66bha92zz97x",
							label: "Yes (will provide email on next page)",
						},
						{ id: "zgf6eb2kd2834f336xht4", label: "No" },
					],
				},
			],
		},
	],
} satisfies Survey;
