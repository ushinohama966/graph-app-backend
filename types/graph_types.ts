export type Context = {
    AuthContext: string
}

type GraphKind = "LINE" | "BAR" | "PIE" | "PADAR" | "SCATTER"

type GraphType = {
    title: string,
    category: string,
    graphKind: GraphKind,
    source: [string],
    label: [string],
    value: [string],
}

export type InputGraphType = {
    inputGraph: GraphType
  }