Technology logos are stored locally so Skills does not depend on an external
image service at runtime. Existing icon dimensions and backgrounds are retained.

- Devicon logos: [Devicon v2.17.0](https://github.com/devicons/devicon/tree/v2.17.0/icons).
  See `LICENSE.devicon` (MIT). `vite.svg` is the **vitejs** build-tool logo;
  Devicon's separate `vite` entry belongs to a blockchain project. macOS uses
  Devicon's Apple mark.
- `springboot.svg`, `langchain.svg`, `langgraph.svg`, `wireshark.svg`, `mlflow.svg`,
  and `dvc.svg`: [Simple Icons 16.33.0](https://www.npmjs.com/package/simple-icons/v/16.33.0).
  See `LICENSE.simple-icons` (CC0).
- `docker-compose.png`: the dedicated Compose logo from the
  [official Docker Compose repository](https://github.com/docker/compose/blob/57751f39966a3aa15722ee1bb9794c6858cc1ec3/logo.png).
  Neither selected icon library provides a dedicated Compose logo, so this uses
  the official asset rather than substituting the Docker whale. See
  `LICENSE.docker-compose` (Apache 2.0).
- `seaborn.svg` (retained asset): [official logo](https://github.com/mwaskom/seaborn/blob/master/doc/_static/logo-mark-lightbg.svg),
  optimized with SVGO. See `LICENSE.seaborn` (BSD).

Logos belong to their respective owners. Core concepts and network protocols are
plain text labels and are not assigned unrelated technology logos.

IoT and CI/CD additions:

- `esp32.svg` uses the Espressif mark, and `mqtt.svg` uses the MQTT mark from
  Simple Icons 16.33.0. `github-actions.svg` uses Devicon v2.17.0.
- `dht11.svg` and `bh1750.svg` are the original breadboard illustrations from
  [Adafruit's Fritzing Library](https://github.com/adafruit/Fritzing-Library/tree/c7bbe2d58a78ebc7b3499351c0f77356cd701c96/parts),
  extracted from `DHT11 Humitidy and Temperature Sensor.fzpz` and
  `Adafruit BH1750.fzpz`. They represent the named hardware models, rather than
  substituting unrelated software logos. See `LICENSE.adafruit-fritzing`
  (Creative Commons Attribution-ShareAlike).
