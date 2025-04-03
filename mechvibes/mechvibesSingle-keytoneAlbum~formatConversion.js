import { nanoid } from "nanoid";

// 配置参数
const config = {
  volume: 0,
  nameId: "0",
  sha256: "8c23cf05846e7126c3d3b7cde161395dcbabc084493458716bffbdf491ed14ab",
  fileType: ".ogg",
};

// 阶段1转换函数
function convertStage1(input) {
  const output = {};

  Object.entries(input).forEach(([key, [startTime, duration]]) => {
    // 为每个按键创建down和up两个事件
    const downId = nanoid();
    const upId = nanoid();
    const middleTime = startTime + duration / 2;

    // 添加down事件
    output[downId] = {
      cut: {
        start_time: startTime,
        end_time: middleTime,
        volume: config.volume,
      },
      name: `${key}-down`,
      source_file_for_sound: {
        name_id: config.nameId,
        sha256: config.sha256,
        type: config.fileType,
      },
    };

    // 添加up事件
    output[upId] = {
      cut: {
        start_time: middleTime,
        end_time: startTime + duration,
        volume: config.volume,
      },
      name: `${key}-up`,
      source_file_for_sound: {
        name_id: config.nameId,
        sha256: config.sha256,
        type: config.fileType,
      },
    };
  });

  return output;
}

// 阶段2转换函数
function convertStage2(input, stage1Output) {
  const output = {};

  Object.keys(input).forEach((key) => {
    // 查找对应的down和up事件的ID
    const downId = Object.entries(stage1Output).find(([_, value]) => value.name === `${key}-down`)?.[0];

    const upId = Object.entries(stage1Output).find(([_, value]) => value.name === `${key}-up`)?.[0];

    if (downId && upId) {
      output[key] = {
        down: {
          type: "sounds",
          value: downId,
        },
        up: {
          type: "sounds",
          value: upId,
        },
      };
    }
  });

  return output;
}

// // 示例输入数据
// const inputData = {
//   1: [2894, 226],
//   2: [12946, 191],
//   // ... 其他数据
// };
//
const inputData = {
  1: [2894, 226],
  2: [12946, 191],
  3: [13470, 190],
  4: [13963, 199],
  5: [14481, 204],
  6: [14994, 187],
  7: [15505, 217],
  8: [15990, 193],
  9: [16529, 184],
  10: [17012, 205],
  11: [17550, 174],
  12: [18052, 186],
  13: [18553, 177],
  14: [19065, 220],
  15: [21734, 238],
  16: [22245, 190],
  17: [22790, 177],
  18: [23317, 166],
  19: [23817, 184],
  20: [24297, 183],
  21: [24811, 186],
  22: [25313, 189],
  23: [25795, 182],
  24: [26309, 167],
  25: [26804, 166],
  26: [27330, 169],
  27: [27883, 197],
  28: [36902, 234],
  29: [45327, 165],
  30: [31542, 170],
  31: [32031, 175],
  32: [32492, 169],
  33: [32973, 174],
  34: [33453, 188],
  35: [33986, 185],
  36: [34425, 176],
  37: [34932, 180],
  38: [35410, 190],
  39: [35914, 189],
  40: [36428, 173],
  41: [12476, 200],
  42: [38136, 265],
  43: [28393, 200],
  44: [38694, 160],
  45: [39148, 151],
  46: [39632, 190],
  47: [40136, 188],
  48: [40621, 214],
  49: [41103, 180],
  50: [41610, 186],
  51: [42110, 183],
  52: [42594, 180],
  53: [43105, 190],
  54: [43565, 273],
  55: [11270, 200],
  56: [45750, 164],
  57: [51541, 287],
  58: [31011, 251],
  59: [3610, 195],
  60: [4210, 180],
  61: [4758, 180],
  62: [5250, 199],
  63: [5831, 209],
  64: [6396, 210],
  65: [6900, 210],
  66: [7443, 221],
  67: [7955, 181],
  68: [8504, 209],
  69: [10132, 208],
  70: [10763, 160],
  71: [19634, 171],
  72: [20143, 202],
  73: [20647, 193],
  74: [18052, 186],
  75: [28914, 212],
  76: [29427, 177],
  77: [29928, 190],
  78: [19065, 220],
  79: [49837, 176],
  80: [50333, 179],
  81: [50783, 221],
  82: [43565, 273],
  83: [44251, 220],
  87: [9046, 187],
  88: [9582, 191],
  3612: [36902, 234],
  3613: [49329, 164],
  3637: [10763, 160],
  3639: [10132, 208],
  3640: [48381, 168],
  3653: [11270, 200],
  3655: [20143, 202],
  3657: [20647, 193],
  3663: [29427, 177],
  3665: [29928, 190],
  3666: [19634, 171],
  3667: [28914, 212],
  3675: [46199, 199],
  3676: [47929, 149],
  3677: [49329, 164],
  57416: [44251, 220],
  57419: [49837, 176],
  57421: [50783, 221],
  57424: [50333, 179],
  60999: [20143, 202],
  61000: [44251, 220],
  61001: [20647, 193],
  61003: [49837, 176],
  61005: [50783, 221],
  61007: [29427, 177],
  61008: [50333, 179],
  61009: [29928, 190],
  61010: [19634, 171],
  61011: [28914, 212],
};

// 执行转换
function convert(input) {
  const stage1Result = convertStage1(input);
  const stage2Result = convertStage2(input, stage1Result);

  console.log("Stage 1 Result:");
  console.log(JSON.stringify(stage1Result, null, 2));

  console.log("\nStage 2 Result:");
  console.log(JSON.stringify(stage2Result, null, 2));
}

// 运行转换
convert(inputData);
