import { drum1Img, guitar1Img, guitar1Img2, guitar1White, guitar2Img, guitar3Img, guitar4Img, guitar5Img, guitar2Yellow, guitar2Red, guitar2Img2, guitar3Img2 } from "./images";

export const categories = ["Guitars", "Drums", "Pianos"]
export const products = [
    {
        id: 1,
        name: 'Ibanez RG5121ET',
        variants: [
            {
                color: '#5832a8',
                img: [guitar1Img, guitar1Img2],
                price: "2444",

            },
            {
                color: '#f5f5f5',
                img: [guitar1White],
                price: "2444",
            }
        ],
        category: 'Guitars',
        price: "2444",
        description: "Body: African mahogany\
            Neck: Five-piece maple/ wenge\
            Fingerboard: Macassar ebony\
            Fingerboard inlays: Off-set Mother of Pearl dot\
            Fingerboard radius: 430 mm\
            Nut: Graph Tech Black TUSQ XL\
            Nut width: 43 mm\
            Scale: 648 mm\
            24 Jumbo stainless steel frets\
            Pickups: 2 Fishman Fluence Modern Ceramic Humbuckers\
            Volume and tone controls\
            3-Way switch\
            Fishman Fluence Voicing switch\
            Bridge: Evertune\
            Machine Heads: Gotoh\
            Black hardware\
            Colour: Polar Lights\
            Includes hard shell case"
    },
    {
        id: 2,
        name: 'Ibanez RG550-PN',
        category: 'Guitars',
        variants: [
            {
                color: '#5832a8',
                img: [guitar2Img, guitar2Img2],
                price: "949",

            },
            {
                color: "red",
                img: [guitar2Red],
                price: "949",

            },
            {
                color: "yellow",
                img: [guitar2Yellow],
                price: "949",

            },
        ],
        price: "949",
        description: "Genesis Collection series\
        Body: Basswood\
        5-Piece Super Wizard neck: Maple/walnut\
        Fretboard: Maple\
        Nut width: 43 mm\
        Scale: 648 mm\
        24 Jumbo frets with Prestige fret edge treatment\
        Edge tremolo\
        Pickups: Ibanez V7 humbucker (neck), Ibanez S1 singlecoil (middle) and Ibanez V8 humbucker (bridge)\
        Black hardware\
        Colour: Purple Neon\
        Made in Japan"
    },
    {
        id: 3,
        name: 'Ibanez RGA42EX-BAM',
        category: 'Guitars',
        variants: [
            {
                color: 'Polar Lights',
                img: [guitar3Img, guitar3Img2],
                price: "949",
            }
        ],

        price: "413",
        description: "Ibanez RGA42EX-BAM electric guitar with Meranti Koprus, maple neck, black hardware and Quantum (H) pickup.Features:- Neck: 3 pcs. Wizard 3 maple. Width at last fret: 58 mm. Thickness on the 1st Fret: 19 mm, frets: 24, jumbo, string thickness: .010/.013/.017/.026/.036/.046, saddle width: 43 mm, strings: D'Addario EXL110, factory tuning: 1E, 2B, 3G, 4D, 5A, 6E, bridge: F1. 06 - Corus: Meranti hardware colour: black - fingerboard radius (mm): 400 - machine heads: Ibanez machine heads - scale: 648 mm / 25.5 inches - neck finish: satin polyurethane - switch: 1x volume, 1x tone, 5-way lever switch - fingerboard: maple - pickup: 2x quantum (humbucker) - thickness at 12th Waistband: 21 mm. Finish: satin polyurethane"
    },
    {
        id: 4,
        name: 'Ibanez RGD71ALMS',
        category: 'Guitars',
        variants: [
            {
                color: '#5832a8',
                img: [guitar4Img],
                price: "949",
            }
        ],
        price: "1129",
        description: ""
    },
    {
        id: 5,
        name: 'Ibanez SML721-RGC',
        category: 'Guitars',
        variants: [
            {
                color: '#5832a8',
                img: [guitar5Img],
                price: "949",
            }
        ],
        price: "929",
        description: ""
    },
    {
        id: 6,
        name: 'Startone Star Drum Set Standard',
        category: 'Drums',
        variants: [
            {
                color: 'black',
                img: [drum1Img],
                price: "269",
            }
        ],
        price: "269",
        description: "5-Piece beginner set\
All drum shells are made of 6-ply and bass drum of 9-ply poplar wood\
Wrapped drum shells in black finish\
The Ultimate beginners drum set with guaranteed fun\
Includes brass cymbal set with 13\" Hi-hat and 15\" Crash/Ride Cymbals"
    },

]