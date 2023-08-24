'use client';

import { useState } from 'react';

export default function Counter() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div>
      <p>{searchQuery}</p>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
