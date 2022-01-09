const treeAPI = process.env.TREE_API ?? 'https://public.ecologi.com';

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
