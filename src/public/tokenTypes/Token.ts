import { PublicKey } from '@solana/web3.js';
import { TokenInfo } from './TokenType';
// Index of a token is how its tokentype is serialized e.g. lamports is at index 0, so it's serialied to 0
export const tokenInfos: TokenInfo[] = [
    {
        symbol: 'LAMPORTS',
        mintMainnet: new PublicKey('11111111111111111111111111111111'),
        mintDevnet: new PublicKey('11111111111111111111111111111111'),
        active: true,
        decimals: 9,
        min: 1000,
        max: 360000000000,
        denomination: 1000000000,
        pythUSDPriceMainnet: new PublicKey('H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG'),
        pythUSDPriceDevnet: new PublicKey('J83w4HKfqxwcq3BEMMkPFSppX3gqekLyLJBexebFVkix'),
    },
    {
        symbol: 'USDC',
        mintMainnet: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
        mintDevnet: new PublicKey('F3hocsFVHrdTBG2yEHwnJHAJo4rZfnSwPg8d5nVMNKYE'),
        active: true,
        decimals: 6,
        min: 1000,
        max: 8000000000,
        denomination: 1000000,
        pythUSDPriceMainnet: new PublicKey('Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD'),
        pythUSDPriceDevnet: new PublicKey('5SSkXsEKQepHHAewytPVwdej4epN1nxgLVM84L4KXgy7'),
    },
    {
        symbol: 'USDT',
        mintMainnet: new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'),
        mintDevnet: new PublicKey('AyPeYKj4oHBGdhLjMwbj9m8tEdS1gr9tyqkpT3oDEZUV'),
        active: true,
        decimals: 6,
        min: 1000,
        max: 8000000000,
        denomination: 1000000,
        pythUSDPriceMainnet: new PublicKey('3vxLXJqLqF3JG5TCbYycbKWRBbCJQLxQmBGCkyqEEefL'),
        pythUSDPriceDevnet: new PublicKey('38xoQ4oeJCBrcVvca2cGk7iV1dAfrmTR1kmhSCJQ8Jto'),
    },
    {
        symbol: 'mSOL',
        mintMainnet: new PublicKey('mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So'),
        mintDevnet: new PublicKey('4EnmvnhxdmMrHQeHXh5tRnhCCUJpdCjmWjrnJPr3YNzi'),
        active: true,
        decimals: 9,
        min: 1000,
        max: 360000000000,
        denomination: 1000000000,
        pythUSDPriceMainnet: new PublicKey('E4v1BBgoso9s64TQvmyownAVJbhbEPGyzA3qn4n46qj9'),
        pythUSDPriceDevnet: new PublicKey('9a6RNx3tCu1TSs6TBSfV2XRXEPEZXQ6WB7jRojZRvyeZ'),
    },
    {
        symbol: 'BONK',
        mintMainnet: new PublicKey('DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'),
        mintDevnet: new PublicKey('5B2TabGvtPgV67jnyEhhSrFvTTBv4awdrPg2qxNashhm'),
        active: true,
        decimals: 5,
        min: 1000000000,
        max: 2000000000000000,
        denomination: 100000,
        pythUSDPriceMainnet: new PublicKey('8ihFLu5FimgTQ1Unh4dVyEHUGodJ5gJQCrQf4KUVB9bN'),
        pythUSDPriceDevnet: new PublicKey('6bquU99ktV1VRiHDr8gMhDFt3kMfhCQo5nfNrg2Urvsn'),
    },
    {
        symbol: 'SAMO',
        mintMainnet: new PublicKey('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU'),
        mintDevnet: new PublicKey('QcvLaJJPXCTmcBsif9DxivbHQLqqjUgcXU1F97sKoPJ'),
        active: true,
        decimals: 9,
        min: 100000000,
        max: 2000000000000000,
        denomination: 1000000000,
        pythUSDPriceMainnet: new PublicKey('5wRjzrwWZG3af3FE26ZrRj3s8A3BVNyeJ9Pt9Uf2ogdf'),
        pythUSDPriceDevnet: new PublicKey('G7dySNGaxZ8y2E89aX1K6rFeBt2ZnYBqXuCu1k2Y9MEe'),
    },
    {
        symbol: 'stSOL',
        mintMainnet: new PublicKey('7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj'),
        mintDevnet: new PublicKey('GbPqCRvpc3Ute2Ga5yxSZhmBjguJmzzjHWu5a7qzYjFW'),
        active: true,
        decimals: 9,
        min: 1_000,
        max: 360_000_000_000,
        denomination: 1000000000,
        pythUSDPriceMainnet: new PublicKey('Bt1hEbY62aMriY1SyQqbeZbm8VmSbQVGBFzSzMuVNWzN'),
        pythUSDPriceDevnet: new PublicKey('2LwhbcswZekofMNRtDRMukZJNSRUiKYMFbqtBwqjDfke'),
    },
    {
        symbol: 'ORCA',
        mintMainnet: new PublicKey('orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE'),
        mintDevnet: new PublicKey('4TFR2cNVufTTqJodYBNK4dVJLmBChUDCNhRHQPwL1aeL'),
        active: true,
        decimals: 6,
        min: 10_000,
        max: 15_000_000_000,
        denomination: 1000000,
        pythUSDPriceMainnet: new PublicKey('4ivThkX8uRxBpHsdWSqyXYihzKF3zpRGAUCqyuagnLoV'),
        pythUSDPriceDevnet: new PublicKey('A1WttWF7X3Rg6ZRpB2YQUFHCRh1kiXV8sKKLV3S9neJV'),
    },
    {
        symbol: 'RAY',
        mintMainnet: new PublicKey('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'),
        mintDevnet: new PublicKey('Fe6W1j4c7Vtht3neoNJLsGpcM7NaBseWbHDppiQupqDi'),
        active: true,
        decimals: 6,
        min: 1_000_000,
        max: 50_000_000_000,
        denomination: 1000000,
        pythUSDPriceMainnet: new PublicKey('AnLf8tVYCM816gmBjiy8n53eXKKEDydT5piYjjQDPgTB'),
        pythUSDPriceDevnet: new PublicKey('EhgAdTrgxi4ZoVZLQx1n93vULucPpiFi2BQtz9RJr1y6'),
    },
    {
        symbol: 'PYTH',
        mintMainnet: new PublicKey('HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'),
        mintDevnet: new PublicKey('9ENsS7oDRD37YgimCK78oWBaAr5Nd1JTn3ZjgNc4xRq5'),
        active: true,
        decimals: 6,
        min: 2_000,
        max: 16_000_000_000,
        denomination: 1000000,
        pythUSDPriceMainnet: new PublicKey('nrYkQQQur7z8rYTST3G9GqATviK5SxTDkrqd21MW6Ue'),
        pythUSDPriceDevnet: new PublicKey('ELF78ZhSr8u4SCixA7YSpjdZHZoSNrAhcyysbavpC2kA'),
    },
    {
        symbol: 'JitoSOL',
        mintMainnet: new PublicKey('J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn'),
        mintDevnet: new PublicKey('BHstKf9BVw7vv7fkKTUREARAboSh1VBmjruSWnkpyv6f'),
        active: true,
        decimals: 9,
        min: 1_000,
        max: 360_000_000_000,
        denomination: 1000000000,
        pythUSDPriceMainnet: new PublicKey('7yyaeuJ1GGtVBLT2z2xub5ZWYKaNhF28mj1RdV4VDFVk'),
        pythUSDPriceDevnet: new PublicKey('3d4eLK2TF6UdpSjKvS5ZUnDY1uZq2sEj9Tk3cujpUaAk'),
    },
    {
        symbol: 'JTO',
        mintMainnet: new PublicKey('jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL'),
        mintDevnet: new PublicKey('7Bp5Qe1ZsFGqw8BXjFA5LaUPu8PPnCy1u1NJ9ggXADme'),
        active: true,
        decimals: 9,
        min: 1_000_000,
        max: 2_000_000_000_000,
        denomination: 1000000000,
        pythUSDPriceMainnet: new PublicKey('D8UUgr8a3aR3yUeHLu7v8FWK7E8Y5sSU7qrYBXUJXBQ5'),
        pythUSDPriceDevnet: new PublicKey('29xQnTzyyuRtgJ7RtSKEgBWwRzZqtrrKmyQQ5m3x629f'),
    },
];
