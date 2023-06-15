const express = require('express');
const VideoSchema = require('../modules/Videosave');
const VideoSchema2 = require('../modules/Videosave2');
const VideoSchema3 = require('../modules/Videosave3');
const VideoSchema4 = require('../modules/Videosave4');
const VideoSchema5 = require('../modules/Videosave5');
const VideoSchema6 = require('../modules/Videosave6');
const VideoSchema7 = require('../modules/Videosave7');
const VideoSchema8 = require('../modules/Videosave8');
const { v4: uuidv4 } = require('uuid');
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
    fileSize: 700 * 1024 * 1024, // 100MB in bytes
  },
}).single('video');



const Storage2 = multer.diskStorage({
  destination: 'video2',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload2 = multer({
  storage: Storage2,
  limits: {
    fileSize: 700 * 1024 * 1024, // 100MB in bytes
  },
}).single('video');


const Storage3 = multer.diskStorage({
  destination: 'video3',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload3 = multer({
  storage: Storage3,
  limits: {
    fileSize: 700 * 1024 * 1024, // 100MB in bytes
  },
}).single('video');


const Storage4 = multer.diskStorage({
  destination: 'video4',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload4 = multer({
  storage: Storage4,
  limits: {
    fileSize: 700 * 1024 * 1024, // 100MB in bytes
  },
}).single('video');

const Storage5 = multer.diskStorage({
  destination: 'video5',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload5 = multer({
  storage: Storage5,
  limits: {
    fileSize: 700 * 1024 * 1024, // 100MB in bytes
  },
}).single('video');



const Storage6 = multer.diskStorage({
  destination: 'video6',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload6 = multer({
  storage: Storage6,
  limits: {
    fileSize: 700 * 1024 * 1024, // 100MB in bytes
  },
}).single('video');


const Storage7 = multer.diskStorage({
  destination: 'video7',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload7 = multer({
  storage: Storage7,
  limits: {
    fileSize: 700 * 1024 * 1024, // 100MB in bytes
  },
}).single('video');

const Storage8 = multer.diskStorage({
  destination: 'video8',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload8 = multer({
  storage: Storage8,
  limits: {
    fileSize: 700 * 1024 * 1024, // 100MB in bytes
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

router.get('/getallvideo', fetchUser, async (req, res) => {
  try {
    const videos = await VideoSchema.find({ user: req.user.id });
    res.json({ videos });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});

router.delete('/deleteVideo/:id', fetchUser, async (req, res) => {
  try {
    let video = await VideoSchema.findById(req.params.id);

    if (!video) {
      return res.status(404).send('Video not found');
    }

    if (video.user.toString() !== req.user.id) {
      return res.status(401).send('Unauthorized');
    }

    video = await VideoSchema.findByIdAndDelete(req.params.id);
    res.json({ "Success": true, video: video });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});





router.post('/savevideo2', fetchUser, (req, res) => {
  try {
    upload2(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newVideo = new VideoSchema2({
          name: req.body.name,
          user: req.user.id,
          schema: req.user.id,
          video: `video-${uuidv4()}`
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


router.get('/getallvideo2', fetchUser, async (req, res) => {
  try {
    const videos = await VideoSchema2.find({ user: req.user.id });
    res.json({ videos });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});

router.delete('/deleteVideo2/:id', fetchUser, async (req, res) => {
  try {
    let video = await VideoSchema2.findById(req.params.id);

    if (!video) {
      return res.status(404).send('Video not found');
    }

    if (video.user.toString() !== req.user.id) {
      return res.status(401).send('Unauthorized');
    }

    video = await VideoSchema2.findByIdAndDelete(req.params.id);
    res.json({ "Success": true, video: video });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});



router.post('/savevideo3', fetchUser, (req, res) => {
  try {
    upload3(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newVideo = new VideoSchema3({
          name: req.body.name,
          user: req.user.id,
          schema: req.user.id,
          video: `video-${uuidv4()}`
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


router.get('/getallvideo3', fetchUser, async (req, res) => {
  try {
    const videos = await VideoSchema3.find({ user: req.user.id });
    res.json({ videos });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});

router.delete('/deleteVideo3/:id', fetchUser, async (req, res) => {
  try {
    let video = await VideoSchema3.findById(req.params.id);

    if (!video) {
      return res.status(404).send('Video not found');
    }

    if (video.user.toString() !== req.user.id) {
      return res.status(401).send('Unauthorized');
    }

    video = await VideoSchema3.findByIdAndDelete(req.params.id);
    res.json({ "Success": true, video: video });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});




router.post('/savevideo4', fetchUser, (req, res) => {
  try {
    upload4(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newVideo = new VideoSchema4({
          name: req.body.name,
          user: req.user.id,
          schema: req.user.id,
          video: `video-${uuidv4()}`
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


router.get('/getallvideo4', fetchUser, async (req, res) => {
  try {
    const videos = await VideoSchema4.find({ user: req.user.id });
    res.json({ videos });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});

router.delete('/deleteVideo4/:id', fetchUser, async (req, res) => {
  try {
    let video = await VideoSchema4.findById(req.params.id);

    if (!video) {
      return res.status(404).send('Video not found');
    }

    if (video.user.toString() !== req.user.id) {
      return res.status(401).send('Unauthorized');
    }

    video = await VideoSchema4.findByIdAndDelete(req.params.id);
    res.json({ "Success": true, video: video });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});



router.post('/savevideo5', fetchUser, (req, res) => {
  try {
    upload5(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newVideo = new VideoSchema5({
          name: req.body.name,
          user: req.user.id,
          schema: req.user.id,
          video: `video-${uuidv4()}`
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


router.get('/getallvideo5', fetchUser, async (req, res) => {
  try {
    const videos = await VideoSchema5.find({ user: req.user.id });
    res.json({ videos });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});

router.delete('/deleteVideo5/:id', fetchUser, async (req, res) => {
  try {
    let video = await VideoSchema5.findById(req.params.id);

    if (!video) {
      return res.status(404).send('Video not found');
    }

    if (video.user.toString() !== req.user.id) {
      return res.status(401).send('Unauthorized');
    }

    video = await VideoSchema5.findByIdAndDelete(req.params.id);
    res.json({ "Success": true, video: video });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});




router.post('/savevideo6', fetchUser, (req, res) => {
  try {
    upload6(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newVideo = new VideoSchema6({
          name: req.body.name,
          user: req.user.id,
          schema: req.user.id,
          video: `video-${uuidv4()}`
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


router.get('/getallvideo6', fetchUser, async (req, res) => {
  try {
    const videos = await VideoSchema6.find({ user: req.user.id });
    res.json({ videos });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});

router.delete('/deleteVideo6/:id', fetchUser, async (req, res) => {
  try {
    let video = await VideoSchema6.findById(req.params.id);

    if (!video) {
      return res.status(404).send('Video not found');
    }

    if (video.user.toString() !== req.user.id) {
      return res.status(401).send('Unauthorized');
    }

    video = await VideoSchema6.findByIdAndDelete(req.params.id);
    res.json({ "Success": true, video: video });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});




router.post('/savevideo7', fetchUser, (req, res) => {
  try {
    upload7(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newVideo = new VideoSchema7({
          name: req.body.name,
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


router.get('/getallvideo7', fetchUser, async (req, res) => {
  try {
    const videos = await VideoSchema7.find({ user: req.user.id });
    res.json({ videos });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});

router.delete('/deleteVideo7/:id', fetchUser, async (req, res) => {
  try {
    let video = await VideoSchema7.findById(req.params.id);

    if (!video) {
      return res.status(404).send('Video not found');
    }

    if (video.user.toString() !== req.user.id) {
      return res.status(401).send('Unauthorized');
    }

    video = await VideoSchema7.findByIdAndDelete(req.params.id);
    res.json({ "Success": true, video: video });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});



router.post('/savevideo8', fetchUser, (req, res) => {
  try {
    upload8(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newVideo = new VideoSchema8({
          name: req.body.name,
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


router.get('/getallvideo8', fetchUser, async (req, res) => {
  try {
    const videos = await VideoSchema7.find({ user: req.user.id });
    res.json({ videos });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});

router.delete('/deleteVideo8/:id', fetchUser, async (req, res) => {
  try {
    let video = await VideoSchema8.findById(req.params.id);

    if (!video) {
      return res.status(404).send('Video not found');
    }

    if (video.user.toString() !== req.user.id) {
      return res.status(401).send('Unauthorized');
    }

    video = await VideoSchema8.findByIdAndDelete(req.params.id);
    res.json({ "Success": true, video: video });
  } catch (error) {
    res.status(500).send("you are sending the wrong data");
  }
});
module.exports = router;
