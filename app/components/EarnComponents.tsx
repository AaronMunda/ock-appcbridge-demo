'use client';

import { Earn } from '@coinbase/onchainkit/earn';

const vaultAddresses: `0x${string}`[] = [
  '0x73e65DBD630f90604062f6E02fAb9138e713edD9',
  '0xd63070114470f685b75B74D60EEc7c1113d33a3D',
  '0x8eB67A509616cd6A7c1B3c8C21D48FF57df3d458',
  '0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB',
  '0x2371e134e3455e0593363cBF89d3b6cf53740618',
  '0xBeEf11eCb698f4B5378685C05A210bdF71093521'
];

export default function EarnComponents() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vaultAddresses.map((address) => (
          <div key={address} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <Earn 
              vaultAddress={address}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
