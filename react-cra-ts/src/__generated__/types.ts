/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetImages
// ====================================================

export interface GetImages_allFile_edges_node {
  __typename: "File";
  relativePath: string;
}

export interface GetImages_allFile_edges {
  __typename: "FileEdge";
  node: GetImages_allFile_edges_node;
}

export interface GetImages_allFile {
  __typename: "FileConnection";
  edges: GetImages_allFile_edges[];
}

export interface GetImages {
  allFile: GetImages_allFile;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
