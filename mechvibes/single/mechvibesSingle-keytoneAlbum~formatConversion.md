我需要一个可以帮我转换json格式的脚本

转换前的json通过变量手动复制到代码中即可, 转换后的json通过console.log输出到控制台供我复制即可。

# 转换前的json格式

```json
{
    "1": [
      2894,
      226
    ],
    "2": [
      12946,
      191
    ],
    "3": [
      13470,
      190
    ],
    "4": [
      13963,
      199
    ],
    "5": [
      14481,
      204
    ],
    "6": [
      14994,
      187
    ],
    "7": [
      15505,
      217
    ],
    "8": [
      15990,
      193
    ],
    "9": [
      16529,
      184
    ],
    "10": [
      17012,
      205
    ],
    "11": [
      17550,
      174
    ],
    "12": [
      18052,
      186
    ],
    "13": [
      18553,
      177
    ],
    "14": [
      19065,
      220
    ],
    "15": [
      21734,
      238
    ],
    "16": [
      22245,
      190
    ],
    "17": [
      22790,
      177
    ],
    "18": [
      23317,
      166
    ],
    "19": [
      23817,
      184
    ],
    "20": [
      24297,
      183
    ],
    "21": [
      24811,
      186
    ],
    "22": [
      25313,
      189
    ],
    "23": [
      25795,
      182
    ],
    "24": [
      26309,
      167
    ],
    "25": [
      26804,
      166
    ],
    "26": [
      27330,
      169
    ],
    "27": [
      27883,
      197
    ],
    "28": [
      36902,
      234
    ],
    "29": [
      45327,
      165
    ],
    "30": [
      31542,
      170
    ],
    "31": [
      32031,
      175
    ],
    "32": [
      32492,
      169
    ],
    "33": [
      32973,
      174
    ],
    "34": [
      33453,
      188
    ],
    "35": [
      33986,
      185
    ],
    "36": [
      34425,
      176
    ],
    "37": [
      34932,
      180
    ],
    "38": [
      35410,
      190
    ],
    "39": [
      35914,
      189
    ],
    "40": [
      36428,
      173
    ],
    "41": [
      12476,
      200
    ],
    "42": [
      38136,
      265
    ],
    "43": [
      28393,
      200
    ],
    "44": [
      38694,
      160
    ],
    "45": [
      39148,
      151
    ],
    "46": [
      39632,
      190
    ],
    "47": [
      40136,
      188
    ],
    "48": [
      40621,
      214
    ],
    "49": [
      41103,
      180
    ],
    "50": [
      41610,
      186
    ],
    "51": [
      42110,
      183
    ],
    "52": [
      42594,
      180
    ],
    "53": [
      43105,
      190
    ],
    "54": [
      43565,
      273
    ],
    "55": [
      11270,
      200
    ],
    "56": [
      45750,
      164
    ],
    "57": [
      51541,
      287
    ],
    "58": [
      31011,
      251
    ],
    "59": [
      3610,
      195
    ],
    "60": [
      4210,
      180
    ],
    "61": [
      4758,
      180
    ],
    "62": [
      5250,
      199
    ],
    "63": [
      5831,
      209
    ],
    "64": [
      6396,
      210
    ],
    "65": [
      6900,
      210
    ],
    "66": [
      7443,
      221
    ],
    "67": [
      7955,
      181
    ],
    "68": [
      8504,
      209
    ],
    "69": [
      10132,
      208
    ],
    "70": [
      10763,
      160
    ],
    "71": [
      19634,
      171
    ],
    "72": [
      20143,
      202
    ],
    "73": [
      20647,
      193
    ],
    "74": [
      18052,
      186
    ],
    "75": [
      28914,
      212
    ],
    "76": [
      29427,
      177
    ],
    "77": [
      29928,
      190
    ],
    "78": [
      19065,
      220
    ],
    "79": [
      49837,
      176
    ],
    "80": [
      50333,
      179
    ],
    "81": [
      50783,
      221
    ],
    "82": [
      43565,
      273
    ],
    "83": [
      44251,
      220
    ],
    "87": [
      9046,
      187
    ],
    "88": [
      9582,
      191
    ],
    "3612": [
      36902,
      234
    ],
    "3613": [
      49329,
      164
    ],
    "3637": [
      10763,
      160
    ],
    "3639": [
      10132,
      208
    ],
    "3640": [
      48381,
      168
    ],
    "3653": [
      11270,
      200
    ],
    "3655": [
      20143,
      202
    ],
    "3657": [
      20647,
      193
    ],
    "3663": [
      29427,
      177
    ],
    "3665": [
      29928,
      190
    ],
    "3666": [
      19634,
      171
    ],
    "3667": [
      28914,
      212
    ],
    "3675": [
      46199,
      199
    ],
    "3676": [
      47929,
      149
    ],
    "3677": [
      49329,
      164
    ],
    "57416": [
      44251,
      220
    ],
    "57419": [
      49837,
      176
    ],
    "57421": [
      50783,
      221
    ],
    "57424": [
      50333,
      179
    ],
    "60999": [
      20143,
      202
    ],
    "61000": [
      44251,
      220
    ],
    "61001": [
      20647,
      193
    ],
    "61003": [
      49837,
      176
    ],
    "61005": [
      50783,
      221
    ],
    "61007": [
      29427,
      177
    ],
    "61008": [
      50333,
      179
    ],
    "61009": [
      29928,
      190
    ],
    "61010": [
      19634,
      171
    ],
    "61011": [
      28914,
      212
    ]
  }
```

# 转换后的json格式

需要分两个阶段

## 阶段1

将上方的key作为下方格式中的"name"的值, 不过命名格式为 {key}-down 和 {key}-up, 也就是说一个key可以转换出两个下方的key-value对。

> 下方的每个key-value对中的key值, 为nanoid生成的UUID, 其值为固定格式的对象, 需要注意的是
> * cut.start_time和cut.end_time的值需要根据上方的key的值进行计算, 计算方式为:
>
>   1. {key}-down
>
>      ```js
>      cut.start_time = 上方的key的值[0]
>      cut.end_time = 上方的key的值[0]+上方的key的值[1] / 2
>      ```
>
>   2. {key}-up
>
>      ```js
>      cut.start_time = 上方的key的值[0]+上方的key的值[1] / 2
>      cut.end_time = 上方的key的值[0]+上方的key的值[1]
>      ```
>
> * cut.volume的值为用户自定义设置(默认为0)
> * source_file_for_sound.name_id的值为用户自定义设置(默认为"0")
> * source_file_for_sound.sha256的值为用户自定义设置(必须由用户主动设置)
> * source_file_for_sound.type的值为用户自定义设置(默认为".ogg")

```json
{
    "15ftafwaidxkgdetwlq3l": {
      "cut": {
        "end_time": 17114.5,
        "start_time": 17012,
        "volume": 0
      },
      "name": "10-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "2jmn69bjk4b3d2aa_awsn": {
      "cut": {
        "end_time": 16086.5,
        "start_time": 15990,
        "volume": 0
      },
      "name": "8-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "2ou0lh3zq-d2a_0btmpi9": {
      "cut": {
        "end_time": 14062.5,
        "start_time": 13963,
        "volume": 0
      },
      "name": "4-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "5pzd2jliauy7iqjbjhcjl": {
      "cut": {
        "end_time": 16183,
        "start_time": 16086.5,
        "volume": 0
      },
      "name": "8-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "6nj2b2z6_nw6fyqs5vywm": {
      "cut": {
        "end_time": 15722,
        "start_time": 15613.5,
        "volume": 0
      },
      "name": "7-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "6srm06liun7i4gs2yiwaf": {
      "cut": {
        "end_time": 3007,
        "start_time": 2894,
        "volume": 0
      },
      "name": "1-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "7syujredl1reznldjt6zy": {
      "cut": {
        "end_time": 14162,
        "start_time": 14062.5,
        "volume": 0
      },
      "name": "4-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "amwqg5vwvk0ckekgo1bzx": {
      "cut": {
        "end_time": 17217,
        "start_time": 17114.5,
        "volume": 0
      },
      "name": "10-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "db9vuv4upqqi1eckvtc3m": {
      "cut": {
        "end_time": 3120,
        "start_time": 3007,
        "volume": 0
      },
      "name": "1-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "gbancjzgxcjeiqtbamolr": {
      "cut": {
        "end_time": 18145,
        "start_time": 18052,
        "volume": 0
      },
      "name": "12-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "gkystdwixm_32_7na36ah": {
      "cut": {
        "end_time": 18238,
        "start_time": 18145,
        "volume": 0
      },
      "name": "12-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "h478hhsjlapok5unzxdee": {
      "cut": {
        "end_time": 18641.5,
        "start_time": 18553,
        "volume": 0
      },
      "name": "13-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "hwzzbsrvtxifsj6odkq4q": {
      "cut": {
        "end_time": 14583,
        "start_time": 14481,
        "volume": 0
      },
      "name": "5-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "in1fpzwz2tvgvjtyay1fs": {
      "cut": {
        "end_time": 16713,
        "start_time": 16621,
        "volume": 0
      },
      "name": "9-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "ivbfbchc3z3s_ztskfxjm": {
      "cut": {
        "end_time": 13155,
        "start_time": 13041.5,
        "volume": 0
      },
      "name": "2-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "jlshsj2dgq9coibijekhr": {
      "cut": {
        "end_time": 13565,
        "start_time": 13470,
        "volume": 0
      },
      "name": "3-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "kxtmyuu3u2wur8ttylj8j": {
      "cut": {
        "end_time": 14685,
        "start_time": 14583,
        "volume": 0
      },
      "name": "5-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "nvrhsbo0l0xboldw2ckle": {
      "cut": {
        "end_time": 18730,
        "start_time": 18641.5,
        "volume": 0
      },
      "name": "13-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "ph6owjahllpgbngqcnm3w": {
      "cut": {
        "end_time": 17637,
        "start_time": 17550,
        "volume": 0
      },
      "name": "11-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "pkyfgoie6v3jk7oanpqih": {
      "cut": {
        "end_time": 15613.5,
        "start_time": 15505,
        "volume": 0
      },
      "name": "7-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "r78ntjisfqsh-qjvcyidu": {
      "cut": {
        "end_time": 13041.5,
        "start_time": 12946,
        "volume": 0
      },
      "name": "2-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "rsa33ncvkiubtm5jlbz2x": {
      "cut": {
        "end_time": 17724,
        "start_time": 17637,
        "volume": 0
      },
      "name": "11-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "u0z2yapcix-bztjdncuhs": {
      "cut": {
        "end_time": 15181,
        "start_time": 15087.5,
        "volume": 0
      },
      "name": "6-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "unqu3osecwl7z6mwktbqf": {
      "cut": {
        "end_time": 15087.5,
        "start_time": 14994,
        "volume": 0
      },
      "name": "6-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "x9pcrflw0ela70aekjnfd": {
      "cut": {
        "end_time": 13660,
        "start_time": 13565,
        "volume": 0
      },
      "name": "3-up",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    },
    "zeqeewmi_czdmebpi2gyn": {
      "cut": {
        "end_time": 16621,
        "start_time": 16529,
        "volume": 0
      },
      "name": "9-down",
      "source_file_for_sound": {
        "name_id": "0",
        "sha256": "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
        "type": ".ogg"
      }
    }
  }
```

## 阶段2

此阶段的转换需要用的原始格式和阶段1的结果, 因为我们此阶段的key需要与原始格式的key保持一致。但其值是一个全新的固定格式的对象, 其中 down.type 和 up.type 的值是"sounds", down.value 和 up.value 的值分别与 阶段1中 对照name名称对象所在 的 的key的uuid值一致。

```json
{
  "1": {
    "down": {
      "type": "sounds",
      "value": "6srm06liun7i4gs2yiwaf"
    },
    "up": {
      "type": "sounds",
      "value": "db9vuv4upqqi1eckvtc3m"
    }
  },
  "2": {
    "down": {
      "type": "sounds",
      "value": "r78ntjisfqsh-qjvcyidu"
    },
    "up": {
      "type": "sounds",
      "value": "ivbfbchc3z3s_ztskfxjm"
    }
  }
}
```
