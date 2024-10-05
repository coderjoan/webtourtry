var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-the-road",
      "name": "Along the Road",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.2024355680911736,
        "pitch": 0,
        "fov": 1.2836595229737267
      },
      "linkHotspots": [
        {
          "yaw": 0.3286126481617302,
          "pitch": -0.20823196502487207,
          "rotation": 0,
          "target": "1-outside-the-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1681593389151903,
          "pitch": 0.2488823518157126,
          "title": "Engineering",
          "text": "Now College of Design and Engineering"
        }
      ]
    },
    {
      "id": "1-outside-the-auditorium",
      "name": "Outside the Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9773758157618326,
          "pitch": 0.09003998281095349,
          "rotation": 0,
          "target": "0-along-the-road"
        },
        {
          "yaw": 0.09264013379210034,
          "pitch": -0.013255973503891738,
          "rotation": 0,
          "target": "2-inside-the-auditorium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-inside-the-auditorium",
      "name": "Inside the Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.139095974666784,
          "pitch": 0.03514915901619453,
          "rotation": 0,
          "target": "1-outside-the-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4564468231253276,
          "pitch": 0.021584894154681677,
          "title": "Spinelli Coffee Company",
          "text": "RIP it has been replaced"
        },
        {
          "yaw": 1.4803741793322152,
          "pitch": 0.4845550657288058,
          "title": "Random Stand",
          "text": "I have never seen this before"
        }
      ]
    }
  ],
  "name": "Engineering Auditorium and its Surroundings",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
