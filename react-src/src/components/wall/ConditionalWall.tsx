import React from "react";
export function ConditionalWall({
  condition,
  children
}: {
  condition: boolean;
  children: any;
}) {
  if (!condition) {
    return null;
  }
  return <>{children}</>;
}
