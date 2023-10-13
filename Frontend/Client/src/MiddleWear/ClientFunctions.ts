import { useSyncExternalStore } from "react";
import { useState, useEffect } from "react";

export function useWindowDimensions() {
    const hasWindow: Boolean = typeof window !== "undefined";

    function getWindowDimensions() {
        const width: number | null = hasWindow ? window.innerWidth : null;
        const height: number | null = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [hasWindow]);

    return windowDimensions;
}

export const getTimefromNow = (creationDate: string | Date | number | null) => {
    if (creationDate) {
        const now = new Date().getTime();
        const date = new Date(creationDate).getTime();
        const timeDifference = now - date;

        const divi = (n: number) => {
            return Math.floor(timeDifference / n);
        };

        const minuteMs = 60000,
            hourMs = 3600000,
            dayMs = 86400000,
            weekMs = 604800000,
            monthMs = 2419200000;

        if (divi(monthMs) >= 1) {
            return `il y a ${divi(monthMs)} Mois`;
        }
        if (divi(weekMs) >= 1) {
            return `il y a ${divi(weekMs)} Semaine${divi(weekMs) == 1 ? "" : "s"}`;
        }
        if (divi(dayMs) >= 1) {
            return `il y a ${divi(dayMs)} Jour${divi(dayMs) == 1 ? "" : "s"}`;
        }
        if (divi(hourMs) >= 1) {
            return `il y a ${divi(hourMs)} Heure${divi(hourMs) == 1 ? "" : "s"}`;
        }
        if (divi(minuteMs) <= 1) {
            return "il y a moins d'une Minute";
        }
        if (divi(minuteMs) < 60) {
            return `il y a ${divi(minuteMs)} Minute${divi(minuteMs) == 1 ? "" : "s"}`;
        }
    }
    return "date incorrecte";
};

export const randomIdGenerator = (length: number) => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let id = "";
    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return id;
};

export const phoneFomater = (str: string) => {
    const cleanedString = str.trim();
    let groups = cleanedString.match(/.{1,2}/g);

    groups![0] = groups![0] + groups![1];
    groups?.splice(1, 1);

    const formattedString = groups!.join(" ");

    return formattedString;
};

export const dateFormater = (lang: string, date: Date | string | number) => {
    if (lang == "ar") {
        const dateOptions: any = { weekday: "long", year: "numeric", month: "short", day: "numeric" };
        const formatDate = new Date(date);
        return formatDate.toLocaleDateString("ar-EG-u-nu-latn", dateOptions);
    }

    const dateOptions: any = { weekday: "long", year: "numeric", month: "short", day: "numeric" };
    const formatDate = new Date(date);
    return formatDate.toLocaleDateString("fr-FR", dateOptions);
};

interface mediaCompression {
    InputValues: any;
    width: number;
    quality: number;
    format: "jpeg" | "png" | "webp";
}

export const mediaCompression = async ({ InputValues, width, quality, format }: mediaCompression) => {
    return new Promise((resolve) => {
        const files = InputValues;
        let filesArray: Array<Blob> = [];

        for (const file of files) {
            filesArray.push(file);
        }

        let CompressedMedias: Array<string> = [];
        const finish = files.length - 1;

        if (finish == -1) {
            return resolve([]);
        }

        filesArray.forEach((file: Blob, index: number) => {
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = (event: any) => {
                const imageUrl = event.target.result;
                const image: any = document.createElement("img");
                image.src = imageUrl;
                image.crossOrigin = "anonymous";

                image.onload = (e: any) => {
                    let canvas = document.createElement("canvas");
                    let ratio = width / image.width;
                    canvas.width = width;
                    canvas.height = image.height * ratio;

                    let context: any = canvas.getContext("2d");
                    context.drawImage(image, 0, 0, canvas.width, canvas.height);

                    const imageUrl: string = canvas.toDataURL(`image/${format}`, quality);
                    CompressedMedias.push(imageUrl);

                    if (index == finish) {
                        return resolve(CompressedMedias);
                    }
                };
            };
        });
    });
};

export const linkToURL = async ({ InputValues, width, quality, format }: mediaCompression) => {
    return new Promise<void>((resolve, reject) => {
        let CompressedMedias: any = [];
        const finish = InputValues.length - 1;
        setTimeout(() => {
            resolve(InputValues);
        }, 10000);
        InputValues.forEach((link: string, index: number) => {
            const image: HTMLImageElement = document.createElement("img");
            image.src = link;
            image.crossOrigin = "anonymous";

            image.onload = (e: any) => {
                let canvas = document.createElement("canvas");
                let ratio = width / image.width;
                canvas.width = width;
                canvas.height = image.height * ratio;

                let context: any = canvas.getContext("2d");
                context.drawImage(image, 0, 0, canvas.width, canvas.height);

                const imageUrl: string = canvas.toDataURL(`image/${format}`, quality);
                CompressedMedias.push(imageUrl);

                if (index == finish) {
                    return resolve(CompressedMedias);
                }
            };
        });
    });
};

export const urlToFile = (url: any, name: String) => {
    const arr = url.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const data = arr[1];

    const dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while (n--) {
        dataArr[n] = dataStr.charCodeAt(n);
    }

    let file = new File([dataArr], `${name}.jpg`, { type: mime });

    return file;
};

export const objectToUrl = (obj: any) => {
    return new URLSearchParams(obj).toString();
};

export const URLToObjectQuerry = (url: string) => {
    const object = JSON.parse('{"' + url.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
        return key === "" ? value : decodeURIComponent(value);
    });

    const purifiedString = JSON.stringify(object).replace(/[-+]/g, " ");
    return JSON.parse(purifiedString);
};

export const setTheme = (theme: boolean) => {
    if (theme == true) {
        document.documentElement.className = "dark";
    }
    if (theme == false) {
        document.documentElement.className = "light";
    }
};
