# 混合媒体系统使用指南

## 新的 `data-media` 属性

现在您可以使用单一的 `data-media` 属性来混合图片和视频，它们将按照您指定的顺序显示。

## 语法格式

```html
data-media='["媒体1", "媒体2", "媒体3", ...]'
```

## 支持的媒体类型

### 1. 图片
- `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
- 例如: `"assets/images/works/example.jpg"`

### 2. 本地视频
- `.mp4`, `.webm`, `.ogg`
- 例如: `"assets/videos/example.mp4"`

### 3. YouTube视频
- 包含 `youtube` 或 `youtu.be` 的链接
- 例如: `"https://www.youtube.com/embed/VIDEO_ID"`

### 4. 外部视频
- 包含 `http` 和视频文件扩展名的链接
- 例如: `"https://example.com/video.webm"`

## 使用示例

### 示例1: 混合本地视频和图片
```html
data-media='[
    "assets/images/works/image1.jpg",
    "assets/videos/video1.mp4", 
    "assets/images/works/image2.jpg",
    "assets/images/works/image3.jpg"
]'
```

### 示例2: 混合YouTube视频和图片
```html
data-media='[
    "assets/images/works/preview.jpg",
    "https://www.youtube.com/embed/VIDEO_ID",
    "assets/images/works/result1.jpg",
    "assets/images/works/result2.jpg"
]'
```

### 示例3: 复杂混合
```html
data-media='[
    "assets/images/works/intro.jpg",
    "https://www.youtube.com/embed/DEMO_VIDEO",
    "assets/images/works/step1.jpg",
    "assets/videos/local_demo.mp4",
    "assets/images/works/final.jpg"
]'
```

## 向后兼容性

系统仍然支持旧的 `data-video` 和 `data-image` 属性：
- 如果提供了 `data-media`，将优先使用
- 如果没有 `data-media`，将使用旧的 `data-video` 和 `data-image`

## 已更新的项目示例

### Violet Evergarden 项目
现在视频会在第二个位置显示（在第一张图片后）：
```html
data-media='[
    "assets/images/works/violet_3D/v_1.jpg", 
    "assets/videos/555_h264.mp4", 
    "assets/images/works/violet_3D/v_2.jpg",
    ...其他图片
]'
```

### VR项目
展示了图片-视频-图片的顺序：
```html
data-media='[
    "assets/images/works/vcc_vr_thumbnail.jpg",
    "https://www.youtube.com/embed/ip0_5cBUwo0", 
    "assets/images/works/vcc_vr_thumbnail.jpg"
]'
```

## 技术实现

JavaScript会自动检测媒体类型：
- YouTube链接 → iframe播放器
- 外部视频链接 → iframe播放器  
- 本地视频文件 → HTML5 video元素
- 图片文件 → img元素

媒体将按照数组中的顺序依次显示在模态框中。
