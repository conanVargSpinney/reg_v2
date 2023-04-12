import * as React from "react";
import Image from 'next/image'
import ProposalIcon from "./ProposalIcon";

function Logo({ size }) {

  const width = size == "large" ? "100" : "40";
  const height = size == "large" ? "100" : "40";

  return (
    <div>
    <Image src="/oceanskies_logo_180.png" width={width} height={height} className="rounded-full" alt="os_logo"/>
    </div>
  );
}

export default Logo;