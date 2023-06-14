const express = require('express');
const VideoSchema = require('../modules/Videosave');
const router = express.Router();
const multer = require('multer');
var fetchUser = require('../middleware/fetchuser');

const Storage = multer.diskStorage({
  destination: 'video',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: Storage,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB in bytes
  },
}).single('video');

router.post('/savevideo', fetchUser, (req, res) => {
  try {
    upload(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newVideo = new VideoSchema({
          // name: req.body.name,
          user: req.user.id,
          schema: req.user.id,
          video: req.file.path
        });

        newVideo.save()
          .then(() => res.send('Successfully uploaded'))
          .catch((err) => console.log(err));
      }
    });
  } catch (error) {
    res.status(500).send("Backend error");
  }
});

module.exports = router;
