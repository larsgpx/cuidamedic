"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function FacebookPixel() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Import react-facebook-pixel dynamically for client-side only use
        import("react-facebook-pixel")
            .then((x) => x.default)
            .then((ReactPixel) => {
                const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

                if (!pixelId) {
                    console.warn("Meta Pixel ID not found in environment variables.");
                    return;
                }

                ReactPixel.init(pixelId);
                ReactPixel.pageView();
            });
    }, []);

    useEffect(() => {
        // Track PageView on route change
        import("react-facebook-pixel")
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.pageView();
            });
    }, [pathname, searchParams]);

    return null;
}
