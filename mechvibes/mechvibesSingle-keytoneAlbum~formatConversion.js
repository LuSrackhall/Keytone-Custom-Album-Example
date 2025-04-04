// 使用方法
// 1. 对需要更改的地方作出修改(修改时注意原始json格式中, 如有key对应的值是null而不是数组的情况,需要注释掉对应的行, 否则会在第二步的运行时发生错误)
// 2. 使用`node mechvibesSingle-keytoneAlbum~formatConversion.js`运行, 在控制台输出转换后的结果
// 3. 复制转换后的结果到键音专辑的配置文件中

import { nanoid } from "nanoid";

// 配置参数
const config = {
  volume: 0,
  nameId: "0",
  sha256: "6e40d3e8acaf32b0b19b777fb628c0f563a7d29dc4b6b652c1dadff31c828a98",
  fileType: ".ogg",
};

// 阶段1转换函数
function convertStage1(input) {
  const output = {};

  Object.entries(input).forEach(([key, [startTime, duration]]) => {
    // 为每个按键创建down和up两个事件
    const downId = nanoid().toLowerCase();
    const upId = nanoid().toLowerCase();
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
  1: [971, 142],
  2: [1276, 115],
  3: [1604, 122],
  4: [1929, 122],
  5: [2237, 134],
  6: [2571, 120],
  7: [2869, 122],
  8: [3177, 130],
  9: [3482, 110],
  10: [3782, 121],
  11: [4077, 128],
  12: [4376, 120],
  13: [4673, 123],
  14: [4991, 131],
  15: [5968, 123],
  16: [6221, 114],
  17: [6515, 120],
  18: [6823, 113],
  19: [7112, 110],
  20: [7412, 107],
  21: [7716, 112],
  22: [8012, 118],
  23: [8326, 112],
  24: [8623, 111],
  25: [8932, 112],
  26: [9246, 117],
  27: [9586, 118],
  28: [14603, 116],
  29: [20804, 118],
  30: [11171, 109],
  31: [11462, 120],
  32: [11784, 106],
  33: [12080, 104],
  34: [12400, 117],
  35: [12715, 110],
  36: [13014, 109],
  37: [13333, 116],
  38: [13638, 113],
  39: [13967, 106],
  40: [14280, 101],
  41: [972, 131],
  42: [15759, 123],
  43: [9915, 121],
  44: [16203, 127],
  45: [16533, 117],
  46: [16843, 111],
  47: [17166, 103],
  48: [17455, 109],
  49: [17767, 108],
  50: [18088, 104],
  51: [18402, 104],
  52: [18720, 110],
  53: [19044, 108],
  54: [19375, 124],
  55: [6822, 116],
  56: [21399, 119],
  57: [24626, 143],
  58: [10885, 126],
  59: [1272, 126],
  60: [1603, 125],
  61: [1924, 128],
  62: [2240, 126],
  63: [2566, 126],
  64: [2869, 122],
  65: [3179, 131],
  66: [3480, 115],
  67: [3782, 124],
  68: [4076, 126],
  69: [6216, 122],
  70: [12080, 103],
  71: [8322, 117],
  72: [8620, 113],
  73: [8931, 114],
  74: [7114, 109],
  75: [9242, 122],
  76: [9580, 131],
  77: [9913, 118],
  78: [7409, 117],
  79: [10228, 118],
  80: [11173, 110],
  81: [11463, 118],
  82: [8012, 115],
  83: [12079, 112],
  87: [4377, 120],
  88: [4988, 135],
  // 91: null,
  // 92: null,
  // 93: null,
  // 3597: null,
  3612: [7715, 112],
  3613: [23519, 127],
  3637: [6511, 126],
  3639: [11782, 110],
  3640: [22658, 126],
  3653: [12715, 106],
  3655: [13328, 126],
  3657: [13641, 107],
  3663: [14278, 104],
  3665: [14602, 120],
  3666: [13016, 108],
  3667: [13964, 113],
  3675: [21097, 129],
  3676: [22917, 129],
  3677: [23232, 126],
  57416: [19720, 122],
  57419: [23797, 119],
  57421: [22657, 129],
  57424: [24087, 119],
  60999: [13328, 126],
  61000: [19720, 122],
  61001: [13641, 107],
  61003: [23797, 119],
  61005: [22657, 129],
  61007: [14278, 104],
  61008: [24087, 119],
  61009: [14602, 120],
  61010: [13016, 108],
  61011: [13964, 113],
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
