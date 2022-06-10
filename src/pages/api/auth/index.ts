import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: "Diego" },
    { id: 2, name: "Hugo" },
    { id: 3, name: "Thiago" },
  ];

  return res.json(users);
};
