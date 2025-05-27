(() => {
    const document_ = document;
    const localStorage_ = localStorage;
    const window_ = window;
    const Uint8Array_ = Uint8Array;
    const Promise_ = Promise;
    const URL_ = URL;

    const CLICK_STR = "click";
    const DIV_STR = "div";
    const LABEL_STR = "label";
    const SPAN_STR = "span";
    const BUTTON_STR = "button";
    const BACK_GDCLR_STR = "background-color";
    const MP4_STR = "mp4";
    const IMPUT_MP4_STR = "input.mp4";
    const OUTPUT_GIF_STR = "output.gif";
    const ADDLISTENER_STR = "addEventListener";
    const ARRAYBUFFER_STR = "arrayBuffer";
    const CREATEOBJURL_STR = "createObjectURL";
    const CHECKED_STR = "checked";
    const SETITEM_STR = "setItem";
    const GETITEM_STR = "getItem";
    const ONLOAD_STR = "onload";
    const ONERROR_STR = "onerror";
    const APPENDCHILD_STR = "appendChild";
    const REMOVE_STR = "remove";
    const JSZIP_STR = "JSZip";
    const PADDING_STR = "padding";
    const BORDER_STR = "border";
    const VALUE_STR = "value";
    const BORDER_RADIUS_STR = "border-radius";
    const CREATEFFMPEGCORE_STR = "createFFmpegCore";
    const STYLE_MARGIN_SIZE_5PX = "margin:0 5px;";
    const ZINDEX_9999_STR = "z-index:9999999999;";
    const DISPLAY_FLX_ALIGN_CENTER = "display:flex;align-items:center;";
    const CDN_JSDELIVR_NET = "https://cdn.jsdelivr.net/npm/";
    const FAIL_LOAD_KOR = " 로드 실패.";
    const FAIL_COUNT_KOR = " 개 실패.";
    const IMAGE_KOR = "이미지 ";
    const DOWNLOAD_KOR = "다운로드 ";
    const GIF_ENG = "GIF ";
    const F366C_STR = "f366c_";

    const setStyle = (a, b) => a.setAttribute("style", b);
    const setStatus = (e) => alert_tag.innerHTML = e;
    const createTag = (tag) => document_.createElement(tag);
    const append = (parent, child) => parent[APPENDCHILD_STR](child);
    const txtContent = (a, b) => a.textContent = b;
    const createTagStyle = (tag, style) => { const a = createTag(tag); setStyle(a, style); return a; };
    const createTagStyleText = (tag, style, text) => { const a = createTag(tag); setStyle(a, style); txtContent(a, text); return a; };
    const btnStyleMacro = (c) => `margin:5px;${PADDING_STR}:10px;${BACK_GDCLR_STR}:#${c};color:white;${BORDER_STR}:none;${BORDER_RADIUS_STR}:4px;cursor:pointer;`;
    const consoleerror = (e) => console.error(e);
    const revokURL = (e) => URL_.revokeObjectURL(e);
    const zeroPad = (a, b) => String(a).padStart(b, "0");
    const getAttr = (a, b) => a.getAttribute(b);
    const insertBf = (a, b) => a.insertBefore(b, a.firstChild);
    const checkFunc = (e) => !window_[e];

    function sleep(ms) {
        return new Promise(s => setTimeout(s, ms));
    }

    const makeChkbox = (f, n) => {
        const checkboxLabel = createTagStyle(LABEL_STR, DISPLAY_FLX_ALIGN_CENTER + `${PADDING_STR}-bottom:5px;`);
        const checkboxText = createTagStyleText(SPAN_STR, STYLE_MARGIN_SIZE_5PX, n);
        append(checkboxLabel, checkboxText);
        const checkbox = createTag("input");
        checkbox.type = "checkbox";
        append(checkboxLabel, checkbox);
        append(f, checkboxLabel);

        return checkbox;
    };

    let alert_tag = document_.getElementById(F366C_STR);

    if (!alert_tag) {
        alert_tag = createTagStyle(DIV_STR, `font-size:22px;position:fixed;${BACK_GDCLR_STR}:white;` + ZINDEX_9999_STR);
        alert_tag.setAttribute("id", F366C_STR);
        insertBf(document_.body, alert_tag);
    }
    else {
        location.reload();
        return;
    }

    alert_tag[ADDLISTENER_STR]("dblclick", () => {
        if (localStorage_[GETITEM_STR](F366C_STR) === "1")
            alert(`다음부터 ${GIF_ENG}설정창이 나옵니다.`);

        localStorage_[SETITEM_STR](F366C_STR, 0);
    });

    const formContainer = createTagStyle(DIV_STR, DISPLAY_FLX_ALIGN_CENTER + `justify-content:center;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);${BACK_GDCLR_STR}:white;${PADDING_STR}:20px;${BORDER_RADIUS_STR}:8px;${BORDER_STR}:3px solid #ddd;width:300px;` + ZINDEX_9999_STR);
    const form = createTag(DIV_STR);

    const gifChk = makeChkbox(form, GIF_ENG + "변환");
    const pngChk = makeChkbox(form, "PNG 변환");

    const selectLabel = createTagStyle(LABEL_STR, DISPLAY_FLX_ALIGN_CENTER + "margin-bottom:10px;");
    const selectText = createTagStyleText(SPAN_STR, STYLE_MARGIN_SIZE_5PX, GIF_ENG + "프레임");

    const button1 = createTagStyleText(BUTTON_STR, btnStyleMacro("4CAF50"), "변환");
    const button2 = createTagStyleText(BUTTON_STR, btnStyleMacro("f44336"), "취소");

    append(selectLabel, selectText);

    const fpscombo = createTagStyle("select", PADDING_STR + ":5px;");

    [5, 7, 8, 10, 12, 16, 20, 25, 33, 60].forEach((e) => {
        const op = createTagStyleText("option", "", e);
        op[VALUE_STR] = e;
        append(fpscombo, op);
    });

    append(selectLabel, fpscombo);
    append(form, selectLabel);
    append(form, button1);
    append(form, button2);
    append(formContainer, form);

    append(document_.body, formContainer);

    let savedComboBoxValue = localStorage_[GETITEM_STR](F366C_STR + "val");
    gifChk[CHECKED_STR] = localStorage_[GETITEM_STR](F366C_STR + "chk1") === "true";
    pngChk[CHECKED_STR] = localStorage_[GETITEM_STR](F366C_STR + "chk2") === "true";

    if (savedComboBoxValue < 5 || savedComboBoxValue > 60)
        savedComboBoxValue = 33;

    fpscombo[VALUE_STR] = savedComboBoxValue;

    const saveSettings = (e) => {
        localStorage_[SETITEM_STR](F366C_STR + "chk1", gifChk[CHECKED_STR]);
        localStorage_[SETITEM_STR](F366C_STR + "chk2", pngChk[CHECKED_STR]);
        localStorage_[SETITEM_STR](F366C_STR + "val", fpscombo[VALUE_STR]);
        localStorage_[SETITEM_STR](F366C_STR, e);
    };

    button1[ADDLISTENER_STR](CLICK_STR, () => {
        saveSettings(1);
        (async () => {
            const loadJavaScript = async (url) => {
                return new Promise_((resolve, reject) => {
                    const script = createTag("script");
                    script.src = url;
                    script.async = true;
                    script[ONLOAD_STR] = () => resolve();
                    script[ONERROR_STR] = () => reject();
                    document_.head[APPENDCHILD_STR](script);
                });
            };

            if (checkFunc(JSZIP_STR)) {
                await loadJavaScript(CDN_JSDELIVR_NET + "jszip@3.10.1/dist/jszip.min.js");

                if (checkFunc(JSZIP_STR)) {
                    setStatus(JSZIP_STR + FAIL_LOAD_KOR);
                    return;
                }
            }

            if (gifChk[CHECKED_STR]) {
                if (checkFunc(CREATEFFMPEGCORE_STR)) {
                    await loadJavaScript(CDN_JSDELIVR_NET + "@ffmpeg/core@0.12.10/dist/umd/ffmpeg-core.js");

                    if (checkFunc(CREATEFFMPEGCORE_STR)) {
                        setStatus("ffmpeg" + FAIL_LOAD_KOR);
                        return false;
                    }
                }
            }

            const convertPng = async (blob) => {
                try {
                    const canvas = createTag("canvas");
                    const context = canvas.getContext("2d");

                    const img = new Image();
                    img.src = URL_[CREATEOBJURL_STR](blob);

                    return new Promise_((resolve) => {
                        img[ONLOAD_STR] = () => {
                            canvas.width = img.width;
                            canvas.height = img.height;
                            context.drawImage(img, 0, 0);
                            canvas.toBlob((blob) => {
                                resolve(blob);
                                revokURL(img.src);
                            }, "image/png");
                        };
                        img[ONERROR_STR] = () => {
                            revokURL(img.src);
                        };
                    });
                } catch (error) {
                    consoleerror(error);
                    return false;
                }
            };

            const convertGif = async (ffmpeg, blob) => {
                try {
                    ffmpeg.FS.writeFile(IMPUT_MP4_STR, new Uint8Array_(await blob[ARRAYBUFFER_STR]()));

                    const fps = fpscombo[VALUE_STR];
                    await ffmpeg.exec(
                        "-f", MP4_STR,
                        "-i", IMPUT_MP4_STR,
                        "-filter_complex", `fps=${fps},scale=-1:-1:flags=lanczos,split [a][b];[a] palettegen [p];[b][p] paletteuse`, OUTPUT_GIF_STR,
                        "-pix_fmt", "rgb24");

                    const gifData = ffmpeg.FS.readFile(OUTPUT_GIF_STR);
                    return new Blob([gifData.buffer], { type: "image/gif" });

                } catch (error) {
                    consoleerror(error);
                    return false;
                }
            };

            const extractExtension = (url) => {
                const cleanUrl = url.split("?")[0];
                const match = cleanUrl.match(/\.(\w{2,4}$)/);
                return match && match.length > 0 ? match[1] : null;
            };

            const chkHeader = (buf) => {
                const fileSignatures = {
                    "png": [0x89, 0x50, 0x4E, 0x47],
                    "webp": [0x52, 0x49, 0x46, 0x46],
                    "jpg": [0xFF, 0xD8, 0xFF],
                    "tiff": [0x49, 0x49, 0x2A],
                    "tiff": [0x4D, 0x4D, 0x2A],
                    "gif": [0x47, 0x49, 0x46],
                    "bmp": [0x42, 0x4D]
                };

                if (String.fromCharCode.apply(null, buf).includes("ftyp"))
                    return "mp4";

                for (const [format, signature] of Object.entries(fileSignatures)) {
                    if (buf.slice(0, signature.length).every((val, i) => val === signature[i]))
                        return format;
                }
            }

            const emo = document_.getElementsByClassName("emoticon");

            const urls = [];
            let mp4cnt = 0;

            for (var i = 0, j, k; i < emo.length; ++i)
                if (getAttr(emo[i], "data-id")) {
                    j = emo[i].src;
                    if (!j)
                        j = getAttr(emo[i], "data-src");
                    if (j.substr(0, 4) !== "http")
                        j = "https://" + j;
                    if (MP4_STR === (k = extractExtension(j)))
                        ++mp4cnt;

                    urls.push({ i: i, j: j, k: k, l: emo[i] });
                }

            const img_len = urls.length;

            if (img_len <= 0) {
                setStatus(IMAGE_KOR + "를 찾을 수 없습니다.");
                return;
            }

            setStatus(IMAGE_KOR + img_len + "개를 발견했습니다. " + DOWNLOAD_KOR + "준비 중.");

            const ffmpegs = [];

            if (gifChk[CHECKED_STR] && mp4cnt > 0) {
                for (let i = 0; i < mp4cnt; i += 50) {
                    ffmpegs.push(await window_[CREATEFFMPEGCORE_STR]({
                        print: () => { },
                        printErr: () => { },
                        onExit: () => { },
                    }));
                }
            }

            const jsZip = new window_[JSZIP_STR]();
            let sucs = 0;
            let fail = 0;
            let mp4i = 0;

            const urldown = async (e) => {
                const setSt = (a, b, c) => setStatus(`${IMAGE_KOR}${a}/${b} 개 ` + DOWNLOAD_KOR + `완료. ${c}${FAIL_COUNT_KOR}`);

                try {
                    const response = await (async (a, b) => {
                        for (let i = 0; !b.ok && i < 3; ++i)
                            b = await fetch(a, {
                                cache: "no-store"
                            });

                        await sleep(Math.floor(Math.random() * 2500) + 500);
                        return b;
                    })(e.j, {});

                    if (!response.ok) {
                        ++fail;
                        return;
                    }

                    const blob = await response.blob();

                    if (!blob) {
                        ++fail;
                        return;
                    }

                    const hdr = chkHeader(new Uint8Array_((await blob[ARRAYBUFFER_STR]()).slice(0, 10)));

                    if (hdr)
                        e.k = hdr;

                    const filename = zeroPad(e.i, 3) + "." + e.k;
                    let al = true;

                    if (gifChk[CHECKED_STR] && e.k === MP4_STR) {
                        const gb = await convertGif(ffmpegs[parseInt(mp4i++ / 50)], blob);

                        if (gb) {
                            jsZip.file(zeroPad(e.i, 3) + ".gif", gb);
                            al = false;
                        }
                        else
                            ++fail;
                    }
                    else if (pngChk[CHECKED_STR] && "jpeg|jpg|webp|bmp|tiff|png".includes(e.k)) {
                        const gb = await convertPng(blob);

                        if (gb) {
                            jsZip.file(zeroPad(e.i, 3) + ".png", gb);
                            al = false;
                        }
                        else
                            ++fail;
                    }

                    if (al)
                        jsZip.file(filename, blob);

                    ++sucs;
                    setSt(sucs, img_len, fail);
                    setStyle(e.l, `filter:sepia(100%) hue-rotate(90deg)`)
                } catch (error) {
                    ++fail;
                    setSt(sucs, img_len, fail);
                    consoleerror(error);
                }
            }

            const tasks = [];

            for (const url of urls) {
                tasks.push(urldown(url));
            }

            Promise_.all(tasks).then(async () => {
                if (sucs <= 0)
                    return;

                try {
                    const zipContent = await jsZip.generateAsync({ type: "blob" });

                    const link = createTag("a");
                    link.href = URL_[CREATEOBJURL_STR](zipContent);
                    link.download = document_.title + ".zip";
                    txtContent(link, "압축파일");

                    setStatus(`을 ${DOWNLOAD_KOR}합니다. ${fail}${FAIL_COUNT_KOR}`);
                    insertBf(alert_tag, link);

                    link[CLICK_STR]();
                } catch (error) {
                    setStatus("zip 생성 에러");
                }
            });
        })();

        formContainer[REMOVE_STR]();
    });

    button2[ADDLISTENER_STR](CLICK_STR, () => {
        saveSettings(0);
        formContainer[REMOVE_STR]();
        alert_tag[REMOVE_STR]();
    });

    const autostart = localStorage_[GETITEM_STR](F366C_STR);

    if (autostart === "1")
        button1[CLICK_STR]();
})();