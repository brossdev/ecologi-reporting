const treeAPI = process.env.TREE_API ?? 'https://public.ecologi.com';

export type TreeData = number[][];

export type TreeResponse = {
  data: TreeData;
  responseCode: string;
  responseText: string;
};

export const getAllTrees = async () => {
  try {
    const treeRes: TreeResponse = await (
      await fetch(`${treeAPI}/trees`)
    ).json();
    if (treeRes.responseCode != 'OK' || treeRes.responseText != 'Success') {
      throw new Error('Error with data');
    }
    return treeRes.data;
  } catch (err) {
    console.log({ err });
    throw new Error('error placeholder');
  }
};
