(() => {
    /*
    용량 줄이기 위해 기존 메서드를 새로 정의

    const a="123",b="456",c="789",d="123",e="456";z[a],z[b],z[c],z[d],z[e];             <-- 이 방식을 채택
    const f=["123","456","789","123","456"];z[f[0]],z[f[1]],z[f[2]],z[f[3]],z[f[4]];
    */

    const _document = document;
    const _localStorage = localStorage;
    const _Promise = Promise;
    const _Uint8Array = Uint8Array;
    const _URL = URL;
    const _window = window;

    const _addEventListener = "addEventListener";
    const _appendChild = "appendChild";
    const _arrayBuffer = "arrayBuffer";
    const _border = "border";
    const _button = "button";
    const _checked = "checked";
    const _children = "children";
    const _click = "click";
    const _createFFmpegCore = "createFFmpegCore";
    const _createObjectURL = "createObjectURL";
    const _div = "div";
    const _getElementsByClassName = "getElementsByClassName";
    const _getItem = "getItem";
    const _innerHTML = "innerHTML";
    const _label = "label";
    const _length = "length";
    const _onerror = "onerror";
    const _onload = "onload";
    const _padding = "padding";
    const _remove = "remove";
    const _setAttribute = "setAttribute";
    const _setItem = "setItem";
    const _span = "span";
    const _value = "value";

    const BACKGROUND_COLOR_STR = "background-color";
    const BORDER_RADIUS_STR = "border-radius";
    const CDN_JSDELIVR_NET = "https://cdn.jsdelivr.net/npm/";
    const DISPLAY_FLX_ALIGN_CENTER = "display:flex;align-items:center;";
    const DOWNLOAD_KOR = "다운로드 ";
    const F366C_STR = "f366c_";
    const FAIL_COUNT_KOR = " 개 실패.";
    const FAIL_LOAD_KOR = " 로드 실패.";
    const GIF_ENG = "GIF ";
    const IMAGE_KOR = "이미지 ";
    const INPUT_MP4_STR = "input.mp4";
    const JSZIP_STR = "JSZip";
    const MP4_STR = "mp4";
    const OUTPUT_GIF_STR = "output.gif";
    const PROXY_SERV_URL = "https://138.2.51.230:17875";
    const STYLE_MARGIN_SIZE_5PX = "margin:0 5px;";
    const ZINDEX_9999_STR = "z-index:9999999999;";

    // 용량 줄이기 위해 기존 메서드를 새로 정의
    const append = (parent, child) => parent[_appendChild](child);
    const btnStyleMacro = (c) => `margin:5px;${_padding}:10px;${BACKGROUND_COLOR_STR}:#${c};color:white;${_border}:none;${BORDER_RADIUS_STR}:4px;cursor:pointer;`;
    const checkFunc = (e) => !_window[e];
    const consoleerror = (e) => console.error(e);
    const createTag = (tag) => _document.createElement(tag);
    const createTagStyle = (tag, style) => { const a = createTag(tag); setStyle(a, style); return a; };
    const createTagStyleText = (tag, style, text) => { const a = createTag(tag); setStyle(a, style); txtContent(a, text); return a; };
    const getAttr = (a, b) => a.getAttribute(b);
    const insertBf = (a, b) => a.insertBefore(b, a.firstChild);
    const revokURL = (e) => _URL.revokeObjectURL(e);
    const setStatus = (e) => alert_tag[_innerHTML] = e;
    const setStyle = (a, b) => a[_setAttribute]("style", b);
    const txtContent = (a, b) => a.textContent = b;
    const zeroPad = (a, b) => String(a).padStart(b, "0");

    function sleep(ms) {
        return new Promise(s => setTimeout(s, ms));
    }

    const makeChkbox = (f, n) => {
        const checkboxLabel = createTagStyle(_label, DISPLAY_FLX_ALIGN_CENTER + `${_padding}-bottom:5px;`);
        const checkboxText = createTagStyleText(_span, STYLE_MARGIN_SIZE_5PX, n);
        append(checkboxLabel, checkboxText);
        const checkbox = createTag("input");
        checkbox.type = "checkbox";
        append(checkboxLabel, checkbox);
        append(f, checkboxLabel);

        return checkbox;
    };

    const isDC = () => {
        if (document.location.hostname.endsWith('dcinside.com'))
            return true;

        return false;
    };

    let alert_tag = _document.getElementById(F366C_STR);

    if (!alert_tag) {
        alert_tag = createTagStyle(_div, `font-size:22px;position:fixed;${BACKGROUND_COLOR_STR}:white;` + ZINDEX_9999_STR);
        alert_tag[_setAttribute]("id", F366C_STR);
        insertBf(_document.body, alert_tag);
    }
    else {
        location.reload();
        return;
    }

    alert_tag[_addEventListener]("dblclick", () => {
        if (_localStorage[_getItem](F366C_STR) === "1")
            alert(`다음부터 ${GIF_ENG}설정창이 나옵니다.`);

        _localStorage[_setItem](F366C_STR, 0);
    });

    const formContainer = createTagStyle(_div, DISPLAY_FLX_ALIGN_CENTER + `justify-content:center;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);${BACKGROUND_COLOR_STR}:white;${_padding}:20px;${BORDER_RADIUS_STR}:8px;${_border}:3px solid #ddd;width:300px;` + ZINDEX_9999_STR);
    const form = createTag(_div);

    const gifChk = makeChkbox(form, GIF_ENG + "변환");
    const pngChk = makeChkbox(form, "PNG 변환");

    const selectLabel = createTagStyle(_label, DISPLAY_FLX_ALIGN_CENTER + "margin-bottom:10px;");
    const selectText = createTagStyleText(_span, STYLE_MARGIN_SIZE_5PX, GIF_ENG + "프레임");
    const noticehttpscert = createTagStyleText("a", "", "디시콘 다운로드할때 클릭");
    const button1 = createTagStyleText(_button, btnStyleMacro("4CAF50"), "변환");
    const button2 = createTagStyleText(_button, btnStyleMacro("f44336"), "취소");

    const fpscombo = createTagStyle("select", _padding + ":5px;");

    // 콤보박스에 GIF 프레임 값을 넣는다
    [5, 7, 8, 10, 12, 16, 20, 25, 33, 60].forEach((e) => {
        const op = createTagStyleText("option", "", e);
        op[_value] = e;
        append(fpscombo, op);
    });

    noticehttpscert[_setAttribute]("href", "#");
    noticehttpscert[_setAttribute]("onclick", `window.open("${PROXY_SERV_URL}", "", "width=400,height=600");`);
    noticehttpscert[_setAttribute]("style", STYLE_MARGIN_SIZE_5PX);
    noticehttpscert[_innerHTML] += "<br>";

    append(selectLabel, selectText);
    append(selectLabel, fpscombo);
    append(form, selectLabel);
    isDC() ? append(form, noticehttpscert) : 0;
    append(form, button1);
    append(form, button2);
    append(formContainer, form);

    append(_document.body, formContainer);

    // localStorage에서 저장된 설정값을 가져오는 코드
    let savedComboBoxValue = _localStorage[_getItem](F366C_STR + "val");
    gifChk[_checked] = _localStorage[_getItem](F366C_STR + "chk1") === "true";
    pngChk[_checked] = _localStorage[_getItem](F366C_STR + "chk2") === "true";

    // 프레임 범위가 정상이 아니면
    if (savedComboBoxValue < 5 || savedComboBoxValue > 60)
        savedComboBoxValue = 33;

    fpscombo[_value] = savedComboBoxValue;

    // localStorage에서 현재 설정값을 저장하는 코드
    const saveSettings = (e) => {
        _localStorage[_setItem](F366C_STR + "chk1", gifChk[_checked]);
        _localStorage[_setItem](F366C_STR + "chk2", pngChk[_checked]);
        _localStorage[_setItem](F366C_STR + "val", fpscombo[_value]);
        _localStorage[_setItem](F366C_STR, e);
    };

    // 변환 버튼을 누를 경우 
    button1[_addEventListener](_click, () => {
        saveSettings(1);
        (async () => {
            const loadJavaScript = async (url) => {
                // 비동기로 js 파일을 불러온다.
                return new _Promise((resolve, reject) => {
                    const script = createTag("script");
                    script.src = url;
                    script.async = true;
                    script[_onload] = () => resolve();
                    script[_onerror] = () => reject();
                    _document.head[_appendChild](script);
                });
            };

            // JSZip 변수가 없을 경우 ( JSZip 이 로드가 안된경우 )
            if (checkFunc(JSZIP_STR)) {
                await loadJavaScript(CDN_JSDELIVR_NET + "jszip@3.10.1/dist/jszip.min.js");

                // 그래도 JSZip 변수가 없을 경우
                if (checkFunc(JSZIP_STR)) {
                    // 오류 띄우고 로직 종료
                    setStatus(JSZIP_STR + FAIL_LOAD_KOR);
                    return;
                }
            }

            // GIF 변환이 체크된 경우
            if (gifChk[_checked]) {
                // createFFmpegCore 변수가 없을 경우 ( FFmpeg 가 로드가 안된경우 )
                if (checkFunc(_createFFmpegCore)) {
                    await loadJavaScript(CDN_JSDELIVR_NET + "@ffmpeg/core@0.12.10/dist/umd/ffmpeg-core.js");

                    // 그래도 createFFmpegCore 변수가 없을 경우
                    if (checkFunc(_createFFmpegCore)) {
                        // 오류 띄우고 로직 종료
                        setStatus("ffmpeg" + FAIL_LOAD_KOR);
                        return false;
                    }
                }
            }

            const convertPng = async (blob) => {
                // 이미지를 png로 변환하는 함수
                try {
                    const canvas = createTag("canvas");
                    const context = canvas.getContext("2d");

                    const img = new Image();
                    img.src = _URL[_createObjectURL](blob);

                    return new _Promise((resolve) => {
                        img[_onload] = () => {
                            canvas.width = img.width;
                            canvas.height = img.height;
                            context.drawImage(img, 0, 0);

                            // blob 타입으로 변환한다.
                            canvas.toBlob((blob) => {
                                resolve(blob);
                                revokURL(img.src);
                            }, "image/png");
                        };
                        img[_onerror] = () => {
                            revokURL(img.src);
                        };
                    });
                } catch (error) {
                    consoleerror(error);
                    return false;
                }
            };

            const convertGif = async (ffmpeg, blob) => {
                // mp4를 gif로 변환하는 함수
                try {
                    // ffmpeg 모듈과 클라이언트 cpu 힘을 빌려 gif로 변환
                    ffmpeg.FS.writeFile(INPUT_MP4_STR, new _Uint8Array(await blob[_arrayBuffer]()));

                    const fps = fpscombo[_value];

                    // mp4 -> gif 변환 command line
                    await ffmpeg.exec(
                        "-f", MP4_STR,
                        "-i", INPUT_MP4_STR,
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
                // url 에서 확장자를 추출하는 함수
                const cleanUrl = url.split("?")[0];
                const match = cleanUrl.match(/\.(\w{2,4}$)/);
                return match && match[_length] > 0 ? match[1] : null;
            };

            const chkHeader = (buf) => {
                // 이미지 또는 영상 파일에서 헤더를 읽어 포멧이 무엇인지 판별하는 함수
                const fileSignatures = {
                    "png": [0x89, 0x50, 0x4E, 0x47],
                    "webp": [0x52, 0x49, 0x46, 0x46],
                    "jpg": [0xFF, 0xD8, 0xFF],
                    "tiff": [0x49, 0x49, 0x2A],
                    "tiff": [0x4D, 0x4D, 0x2A],
                    "gif": [0x47, 0x49, 0x46],
                    "bmp": [0x42, 0x4D]
                };

                // mp4 식별자가 들어간 경우
                if (String.fromCharCode.apply(null, buf).includes("ftyp"))
                    return "mp4";

                for (const [format, signature] of Object.entries(fileSignatures)) {
                    if (buf.slice(0, signature[_length]).every((val, i) => val === signature[i]))
                        return format;
                }
            }

            // 아카라이브콘 검색 ( 콘의 url 주소와 사이트 주소가 일치함 => CORS 에러 발생 X )
            const emo = _document[_getElementsByClassName]("emoticon");

            const urls = [];
            let mp4cnt = 0;

            for (var i = 0, j, k; i < emo[_length]; ++i)
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

            let img_len = urls[_length];

            if (img_len <= 0) {
                // 디시콘 검색 ( 콘의 url 주소와 사이트 주소가 일치 안함 => CORS 에러 발생 O ) 중개 서버 필요
                const emo = _document[_getElementsByClassName]("img_dccon");

                for (var i = 0, j, k; i < emo[_length]; ++i)
                    if (emo[i] && emo[i][_children] && emo[i][_children][0]) {
                        j = emo[i][_children][0].src;
                        if (j.substr(0, 4) !== "http")
                            j = "https://" + j;
                        if (MP4_STR === (k = extractExtension(j)))
                            ++mp4cnt;

                        j = PROXY_SERV_URL + "/proxy?url=" + encodeURIComponent(j);
                        urls.push({ i: i, j: j, k: k, l: emo[i] });
                    }

                img_len = urls[_length];

                if (img_len <= 0) {
                    setStatus(IMAGE_KOR + "를 찾을 수 없습니다.");
                    return;
                }
            }

            setStatus(IMAGE_KOR + img_len + "개를 발견했습니다. " + DOWNLOAD_KOR + "준비 중.");

            const ffmpegs = [];

            if (gifChk[_checked] && mp4cnt > 0) {
                for (let i = 0; i < mp4cnt; i += 50) {
                    // mp4 -> gif를 50번 이상 할 경우 새로운 ffmpegcore 객체를 생성 ( 하나의 ffmpegcore 객체로 50개 넘게 변환 할 경우 변환이 안됨 )
                    ffmpegs.push(await _window[_createFFmpegCore]({
                        print: () => { },
                        printErr: () => { },
                        onExit: () => { },
                    }));
                }
            }

            // JSZip 변수 선언
            const jsZip = new _window[JSZIP_STR]();
            let sucs = 0;
            let fail = 0;
            let mp4i = 0;

            const urldown = async (e) => {
                const setSt = (a, b, c) => setStatus(`${IMAGE_KOR}${a}/${b} 개 ` + DOWNLOAD_KOR + `완료. ${c}${FAIL_COUNT_KOR}`);

                try {
                    const response = await (async (a, b) => {
                        // url로부터 이미지 가져오기 ( 실패할 경우 총 3번 시도  )
                        for (let i = 0; !b.ok && i < 3; ++i) {
                            b = await fetch(a, {
                                cache: "no-store"
                            });

                            if (b && b.ok)
                                break;

                            // 이미지 획득 실패할 경우 랜덤으로 딜레이 추가
                            await sleep(Math.floor(Math.random() * 2500) + 500);
                        }
                        return b;
                    })(e.j, {}); // {} 의 의미 : for 문 안에 b.ok 할때 오류방지


                    // 총 3번 시도 했는데도 불구하고 못 얻었으면
                    if (!response.ok) {
                        ++fail;
                        return;
                    }

                    const blob = await response.blob();

                    if (!blob) {
                        ++fail;
                        return;
                    }

                    // 얻은 이미지의 첫 10자리를 unsigned char 형으로 변환해서 무슨 코덱인지 판별
                    const hdr = chkHeader(new _Uint8Array((await blob[_arrayBuffer]()).slice(0, 10)));

                    if (hdr) // 코덱 판별에 성공하면 url 에 붙어있는 확장자를 무시하고 최우선으로 판단 ( 겉은 png인데 속은 jpg 인 경우가 있기 때문 )
                        e.k = hdr;

                    let al = true;

                    // gif 변환이 체크됐고 url 확장자가 mp4인 경우
                    if (gifChk[_checked] && e.k === MP4_STR) {
                        // gif 로 변환 ( 50개 단위로 ffmpegcore를 교체한다 )
                        const gb = await convertGif(ffmpegs[parseInt(mp4i++ / 50)], blob);

                        if (gb) {
                            // zip 파일에 변환한 gif 파일을 추가한다.
                            // 파일 이름을 001.jpg 002.jpg 이런식으로 저장하기 위해 제로패딩 추가 ( 정렬에 도움이 됨 )
                            jsZip.file(zeroPad(e.i, 3) + ".gif", gb);
                            al = false;
                        }
                        else
                            ++fail;
                    }
                    // png 변환이 체크됐고 확장자가 jpeg,jpg,webp,bmp,tiff 에 포함됐다면
                    else if (pngChk[_checked] && "jpeg|jpg|webp|bmp|tiff".includes(e.k)) {
                        // png 변환
                        const gb = await convertPng(blob);

                        if (gb) {
                            // zip 파일에 변환한 png 파일을 추가한다.
                            jsZip.file(zeroPad(e.i, 3) + ".png", gb);
                            al = false;
                        }
                        else
                            ++fail;
                    }

                    // gif 도 아니고 png 도 아닌 경우 그냥 파일 그대로 zip에 넣는다
                    if (al) {
                        const filename = zeroPad(e.i, 3) + "." + e.k;
                        jsZip.file(filename, blob);
                    }

                    ++sucs;
                    setSt(sucs, img_len, fail);

                    // 변환이 된 이미지를 품고 있는 html 태그는 배경색을 바꾼다
                    setStyle(e.l, `filter:sepia(100%) hue-rotate(90deg)`);
                } catch (error) {
                    ++fail;
                    setSt(sucs, img_len, fail);
                    consoleerror(error);
                }
            }

            const tasks = [];

            for (const url of urls) {
                // 추출이 된 url를 다운로드 한 뒤 변환하는 함수 호출
                tasks.push(urldown(url));
            }

            // 다운로드 뒤 변환이 끝난 경우
            _Promise.all(tasks).then(async () => {
                if (sucs <= 0) {
                    _localStorage[_setItem](F366C_STR, 0);
                    return;
                }

                try {
                    // 이미지를 추가한 zip 파일을 완성하고 blob 타입으로 변환
                    const zipContent = await jsZip.generateAsync({ type: "blob" });

                    // 하이퍼링크를 생성하고 zip blob 주소를 하이퍼링크 url로 대체
                    const link = createTag("a");
                    link.href = _URL[_createObjectURL](zipContent);

                    let title = document.getElementsByClassName("font_blue")[0];

                    if (title)
                        title = title[_innerHTML];

                    if (!title)
                        title = _document.title;

                    link.download = title + ".zip";

                    // 압축파일 이라는 문자열을 하이퍼링크 text로 사용해 "압축파일" 글자를 클릭 할 경우 언제든지 다운로드 할 수 있도록 변경
                    txtContent(link, "압축파일");

                    setStatus(`을 ${DOWNLOAD_KOR}합니다. ${fail}${FAIL_COUNT_KOR}`);
                    insertBf(alert_tag, link);

                    // 디폴트로 한 번 클릭명령을 내린다.
                    link[_click]();
                } catch (error) {
                    setStatus("zip 생성 에러");
                }
            });
        })();

        formContainer[_remove]();
    });

    button2[_addEventListener](_click, () => {
        saveSettings(0);
        formContainer[_remove]();
        alert_tag[_remove]();
    });

    const autostart = _localStorage[_getItem](F366C_STR);

    if (autostart === "1")
        button1[_click]();
})();