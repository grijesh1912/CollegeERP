const prisma = require("../config/prisma");

exports.getNotices = async (req, res) => {
  const notices = await prisma.notice.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json(notices);
};

exports.createNotice = async (req, res) => {
  const { title, content } = req.body;

  const notice = await prisma.notice.create({
    data: {
      title,
      content,
    },
  });

  res.json(notice);
};