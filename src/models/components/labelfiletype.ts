/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Print format of the <a href="https://docs.goshippo.com/docs/shipments/shippinglabelsizes/">label</a>. If empty, will use the default format set from
 *
 * @remarks
 * <a href="https://apps.goshippo.com/settings/labels">the Shippo dashboard.</a>
 */
export enum LabelFileType {
    Png = "PNG",
    PNG23x75 = "PNG_2.3x7.5",
    Pdf = "PDF",
    PDF23x75 = "PDF_2.3x7.5",
    PDF4x6 = "PDF_4x6",
    PDF4x8 = "PDF_4x8",
    PdfA4 = "PDF_A4",
    PdfA5 = "PDF_A5",
    PdfA6 = "PDF_A6",
    Zplii = "ZPLII",
}

/** @internal */
export const LabelFileType$ = z.nativeEnum(LabelFileType);
