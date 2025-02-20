import React, { useState } from "react";

const KdramaList = () => {
  const [query, setQuery] = useState("");

  const kdramas = [
    "Squid Game",
    "Sweet Home",
    "All of Us Are Dead",
    "Hellbound",
    "Kingdom",
    "My Name",
    "Vincenzo",
    "Alchemy of Souls",
    "The Glory",
    "Crash Landing on You",
    "It's Okay to Not Be Okay",
    "True Beauty",
    "Business Proposal",
    "Extraordinary Attorney Woo",
    "Hotel Del Luna"
  ];

  let filteredDramas = kdramas.filter((drama) =>
    drama.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Korean Drama Search</h2>
      <input
        type="text"
        placeholder="Find your favorite K-drama"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px" }}
      />
      <ul>
        {filteredDramas.map((drama, idx) => (
          <li key={idx}>{drama}</li>
        ))}
      </ul>
    </div>
  );
};

export default KdramaList;
