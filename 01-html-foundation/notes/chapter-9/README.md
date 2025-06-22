Chapter 9: Video & Audio
========================

Introduction
------------

This chapter focuses on how to add video and audio to your website using HTML5 `<video>` and `<audio>` elements or hosted services (such as YouTube or SoundCloud). In this chapter, you will learn:

-   How to use HTML5 `<video>` and `<audio>` elements
-   When to host your own video and audio and when to use a service such as YouTube

Timeline: Video & Audio
-----------------------

Web technologies evolve rapidly. Below is a timeline of key changes in video and audio on the web:

-   **1996**: RealAudio streaming audio (Audio)
-   **1998**: RealVideo streaming video (Video)
-   **2000**: RealVideo 8 streaming video (Video)
-   **2004**: Video sharing sites offer alternatives to self-hosting
-   **2005**: YouTube launched
-   **2006**: Vimeo launched
-   **2007**: YouTube releases iPhone app; JavaScript libraries (jQuery, script.aculo.us, Prototype) enable animated effects
-   **2008**: Browsers (IE9, Firefox 3.5, Chrome 3, Safari 3.1) introduce HTML5 `<video>` and `<audio>` tags
-   **2009**: Vimeo releases HTML5 player
-   **2010**: YouTube releases HTML5 player
-   **2011**: Vimeo releases iPhone app

Understanding Video Formats and Players
---------------------------------------

Adding video to a website involves understanding file formats and video players/plugins.

### Formats

-   Common formats: AVI, Flash Video, H264, MPEG, Ogg Theora, QuickTime, WebM, Windows Media.
-   Browsers support different formats, requiring multiple formats for compatibility.
-   Encoding converts videos to different formats using tools like Miro Video Converter.

### Players/Plugins

-   Pre-2010 browsers required plugins for video playback, each supporting specific formats.
-   Modern browsers support the HTML5 `<video>` tag, reducing plugin needs but requiring multiple formats.

### Approach

-   **Hosted Services** (e.g., YouTube, Vimeo): Easiest, providing compatible players and encoding.
-   **Self-Hosting**: Use HTML5 `<video>` for modern browsers, offering WebM and MP4 formats.

Using Hosted Video Services
---------------------------

### Advantages

-   Provide cross-browser compatible players and handle encoding into multiple formats.
-   Save bandwidth as videos are hosted on their servers.

### Disadvantages

-   Videos are accessible on the host's site, which may not suit exclusive content.
-   Some services add ads or restrict monetization.
-   Video quality may be limited.

### Alternative

Self-hosting offers greater control but requires more setup.

HTML5: Preparing Video for Your Pages
-------------------------------------

The HTML5 `<video>` element is supported by modern browsers and provides native video playback capabilities.

-   **Support**: Does not include digital rights management (DRM).
-   **Formats**:
    -   H264: Supported by IE, Safari.
    -   WebM: Supported by Android, Chrome, Firefox, Opera.
-   **Controls**: Browser-native, customizable via JavaScript.
-   **In the Browser**: Resolves issues like inconsistent menu behavior or window scaling.

### Attributes

-   `src`: Path to the video (e.g., H264 for IE/Safari).
-   `poster`: Image displayed while the video loads.
-   `width`, `height`: Player size in pixels.
-   `controls`: Displays browser-provided controls.
-   `autoplay`: Plays video automatically.
-   `loop`: Replays video upon completion.
-   `preload`: Controls loading behavior (none, auto, metadata).

### Example Code

```
<!DOCTYPE html>
<html>
  <head>
    <title>Adding HTML5 Video</title>
  </head>
  <body>
    <video src="video/puppy.mp4" poster="images/puppy.jpg" width="400" height="300" preload controls loop>
      <p>A video of a puppy playing in the snow</p>
    </video>
  </body>
</html>

```

HTML5: Multiple Video Sources
-----------------------------

Use `<source>` elements inside `<video>` to specify multiple formats, replacing the `src` attribute (e.g., MP4 for iPad, WebM for others). The `type` attribute specifies format and codecs.

### Example Code

```
<!DOCTYPE html>
<html>
  <head>
    <title>Multiple Video Sources</title>
  </head>
  <body>
    <video poster="images/puppy.jpg" width="400" height="320" preload controls loop>
      <source src="video/puppy.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
      <source src="video/puppy.webm" type='video/webm;codecs="vp8, vorbis"' />
      <p>A video of a puppy playing in the snow</p>
    </video>
  </body>
</html>

```

HTML5: Combining Multiple Video Formats
---------------------------------------

Offer videos in multiple HTML5 formats for maximum compatibility. Advanced features include custom controls, resolution switching, and syncing with page elements.

Adding Audio to Web Pages
-------------------------

MP3 is the most popular audio format. Options include:

-   **Hosted Services**: Sites like SoundCloud provide embeddable players.
-   **HTML5**: The `<audio>` element provides browser-native controls.

Continuous playback across pages is challenging, often requiring AJAX or a new window.

HTML5: Adding HTML5 Audio to Your Pages
---------------------------------------

The `<audio>` element includes attributes to control playback:

-   `src`: Path to the audio file.
-   `controls`: Displays browser-provided controls.
-   `autoplay`: Plays audio automatically (not recommended).
-   `preload`: Controls loading behavior (none, auto, metadata).
-   `loop`: Replays audio upon completion.

Works in browsers supporting Ogg Vorbis (Firefox, Chrome, Opera); MP3 is required for Safari/IE.

### Example Code

```
<!DOCTYPE html>
<html>
  <head>
    <title>Adding HTML5 Audio</title>
  </head>
  <body>
    <audio src="audio/test-audio.ogg" controls autoplay>
      <p>This browser does not support our audio format.</p>
    </audio>
  </body>
</html>

```

HTML5: Multiple Audio Sources
-----------------------------

Use `<source>` elements to specify multiple formats (e.g., MP3 for Safari/Chrome/IE9, Ogg Vorbis for Firefox/Chrome/Opera). The `<audio>` tag has less adoption than `<video>` due to early audio quality issues.

### Example Code

```
<!DOCTYPE html>
<html>
  <head>
    <title>Multiple Audio Sources</title>
  </head>
  <body>
    <audio controls autoplay>
      <source src="audio/test-audio.ogg" />
      <source src="audio/test-audio.mp3" />
      <p>This browser does not support our audio format.</p>
    </audio>
  </body>
</html>

```

Example: HTML5 Video & Audio
----------------------------

This example uses HTML5 to show a video in H264 and WebM formats with fallback text for unsupported browsers.

### Example Code

```
<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Video and Audio</title>
  </head>
  <body>
    <video poster="images/puppy.jpg" width="400" height="320" preload controls loop>
      <source src="video/puppy.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
      <source src="video/puppy.webm" type='video/webm;codecs="vp8, vorbis"' />
      <p>A video of a puppy playing in the snow</p>
    </video>
  </body>
</html>

```

Summary
-------

-   HTML5 introduces `<video>` and `<audio>` elements, supported in modern browsers but requiring multiple formats for compatibility.
-   Browsers supporting HTML5 elements do not all support the same video/audio formats, necessitating multiple file formats.
-   Hosted services like YouTube and SoundCloud provide easy alternatives to self-hosting media files.


