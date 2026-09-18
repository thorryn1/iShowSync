export default function() {

    const video = document.createElement("video");

    video.id = "ishowsync-video";

   video.src =
    "https://raw.githubusercontent.com/thorryn1/iShowSync/main/assets/ishow/iShowSpeed_fixed.webm";

    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    video.style.position = "fixed";
    video.style.right = "387px";
    video.style.bottom = "2px";

    video.style.width = "95px";
    video.style.height = "95px";

    video.style.objectFit = "contain";
    video.style.zIndex = "999999";

    document.body.appendChild(video);
}