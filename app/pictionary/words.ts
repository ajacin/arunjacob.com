// Full master word list for /pictionary (printable) and /pict (random picker).
// Order roughly groups by difficulty; duplicates are removed for the exported list.

const RAW: string[] = [
  // 1-50: easy, drawable
  'Sun', 'Moon', 'Star', 'Cloud', 'Rainbow',
  'Tree', 'Flower', 'Leaf', 'Mountain', 'River',
  'Cat', 'Dog', 'Bird', 'Fish', 'Rabbit',
  'Horse', 'Frog', 'Bee', 'Duck', 'Lion',
  'House', 'Car', 'Bus', 'Boat', 'Train',
  'Plane', 'Bicycle', 'Ball', 'Kite', 'Book',
  'Clock', 'Key', 'Phone', 'Cup', 'Plate',
  'Apple', 'Banana', 'Pizza', 'Cake', 'Egg',
  'Candy', 'Ice Cream', 'Hat', 'Shoe', 'Sock',
  'Heart', 'Snowman', 'Umbrella', 'Lollipop', 'Guitar',
  // 51-100: object-based words
  'Coconut', 'Crown', 'Oil', 'Hula Hoop', 'State',
  'Toy', 'Inch', 'Fern', 'Potato', 'Pencil',
  'Baggage', 'Bike', 'Paper', 'Goblin', 'Stapler',
  'Third Plate', 'Food', 'Baseball', 'Spaceship', 'Cotton Candy',
  'Tip', 'Banana Split', 'Melt', 'Castle', 'Rolly Polly',
  'Puppet', 'Baby', 'Boot', 'Manatee', 'Wallet',
  'Gum', 'Tongs', 'Scarecrow', 'Waist', 'Hurdle',
  'Hopscotch', 'Museum', 'Shopping Cart', 'Pollution', 'Dimple',
  'Magic', 'Skirt', 'Sushi', 'Wreck', 'Gap',
  'Juice', 'Nest', 'Earmuffs', 'Celery', 'Mirror',
  // 101-150: hard
  'Thunder', 'Hand Soap', 'Stuffed Animal', 'Carat', 'Great-Grandfather',
  'Spare', 'Landlord', 'Pain', 'Ginger', 'Coastline',
  'Ceiling Fan', 'Sunburn', 'Living Room', 'Sponge', 'Vet',
  'Season', 'Knight', 'Gold', 'Attack', 'Putty',
  'Oxcart', 'Moth', 'Baseboards', 'Win', 'Fabric',
  'Chicken Coop', 'Deep', 'Welder', 'Yolk', 'Tip',
  'Sushi', 'Cell Phone Charger', 'Publisher', 'Guarantee', 'University',
  'Raft', 'Cargo', 'Manatee', 'Sun Block', 'Stationery',
  'Shack', 'Bedbug', 'Cloak', 'Tourist', 'Cruise Ship',
  'Double', 'Jedi', 'Stay', 'Wax', 'Chef',
  // 151-200: another hard batch
  'Team', 'Blueprint', 'Juggle', 'World', 'Diver',
  'Driveway', 'Dent', 'Sled', 'Great-Grandfather', 'Rim',
  'Spare', 'Pain', 'Amusement Park', 'Geyser', 'Hut',
  'Living Room', 'Catalog', 'Human', 'Plow', 'Season',
  'Drawback', 'Swamp', 'Freshman', 'Customer', 'Earache',
  'Jungle', 'Baseboards', 'Coach', 'Foil', 'Trapped',
  'Judge', 'Pro', "S'mores", 'Sandbox', 'Baguette',
  'Nightmare', 'Half', 'Date', 'Hoop', 'Macho',
  'Carpenter', 'Lance', 'Boa Constrictor', 'Coil', 'Stew',
  'Letter Opener', 'Dead End', 'Extension Cord', 'Wheelie', 'Lung',
];

function seededShuffle<T>(list: T[]): T[] {
  const a = [...list];
  let s = 20260906;
  const rnd = () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Easy and hard words are mixed together so that picking a random number
// gives an unpredictable difficulty.
export const words: string[] = seededShuffle(
  (() => {
    const seen = new Set<string>();
    const out: string[] = [];
    for (const raw of RAW) {
      const w = raw.trim();
      if (!w) continue;
      const key = w.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(w);
    }
    return out;
  })()
);
