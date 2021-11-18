/*
 *
 * (c) Copyright Ascensio System SIA 2010-2019
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-12 Ernesta Birznieka-Upisha
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
*/
if (Common === undefined) {
    var Common = {;
}

if (Common.define === undefined) {
    Common.define = {};
}

define(function(){ 'use strict';

    Common.define.c_oAscMathMainType = {
        Symbol       :  0x00,
        Fraction     :  0x01,
        Script       :  0x02,
        Radical      :  0x03,
        Integral     :  0x04,
        LargeOperator:  0x05,
        Bracket      :  0x06,
        Function     :  0x07,
        Accent       :  0x08,
        LimitLog     :  0x09,
        Operator     :  0x0a,
        Matrix       :  0x0b
    };

// [translate, count cells, scroll]

// equations sub groups

// equations types

    Common.define.c_oAscMathType = {
        Symbol_pm                               : 0x00000000,
        Symbol_infinity                         : 0x00000001,
        Symbol_equals                           : 0x00000002,
        Symbol_neq                              : 0x00000003,
        Symbol_about                            : 0x00000004,
        Symbol_times                            : 0x00000005,
        Symbol_div                              : 0x00000006,
        Symbol_factorial                        : 0x00000007,
        Symbol_propto                           : 0x00000008,
        Symbol_less                             : 0x00000009,
        Symbol_ll                               : 0x0000000a,
        Symbol_greater                          : 0x0000000b,
        Symbol_gg                               : 0x0000000c,
        Symbol_leq                              : 0x0000000d,
        Symbol_geq                              : 0x0000000e,
        Symbol_mp                               : 0x0000000f,
        Symbol_cong                             : 0x00000010,
        Symbol_approx                           : 0x00000011,
        Symbol_equiv                            : 0x00000012,
        Symbol_forall                           : 0x00000013,
        Symbol_additional                       : 0x00000014,
        Symbol_partial                          : 0x00000015,
        Symbol_sqrt                             : 0x00000016,
        Symbol_cbrt                             : 0x00000017,
        Symbol_qdrt                             : 0x00000018,
        Symbol_cup                              : 0x00000019,
        Symbol_cap                              : 0x0000001a,
        Symbol_emptyset                         : 0x0000001b,
        Symbol_percent                          : 0x0000001c,
        Symbol_degree                           : 0x0000001d,
        Symbol_fahrenheit                       : 0x0000001e,
        Symbol_celsius                          : 0x0000001f,
        Symbol_inc                              : 0x00000020,
        Symbol_nabla                            : 0x00000021,
        Symbol_exists                           : 0x00000022,
        Symbol_notexists                        : 0x00000023,
        Symbol_in                               : 0x00000024,
        Symbol_ni                               : 0x00000025,
        Symbol_leftarrow                        : 0x00000026,
        Symbol_uparrow                          : 0x00000027,
        Symbol_rightarrow                       : 0x00000028,
        Symbol_downarrow                        : 0x00000029,
        Symbol_leftrightarrow                   : 0x0000002a,
        Symbol_therefore                        : 0x0000002b,
        Symbol_plus                             : 0x0000002c,
        Symbol_minus                            : 0x0000002d,
        Symbol_not                              : 0x0000002e,
        Symbol_ast                              : 0x0000002f,
        Symbol_bullet                           : 0x00000030,
        Symbol_vdots                            : 0x00000031,
        Symbol_cdots                            : 0x00000032,
        Symbol_rddots                           : 0x00000033,
        Symbol_ddots                            : 0x00000034,
        Symbol_aleph                            : 0x00000035,
        Symbol_beth                             : 0x00000036,
        Symbol_QED                              : 0x00000037,
        Symbol_alpha                            : 0x00010000,
        Symbol_beta                             : 0x00010001,
        Symbol_gamma                            : 0x00010002,
        Symbol_delta                            : 0x00010003,
        Symbol_varepsilon                       : 0x00010004,
        Symbol_epsilon                          : 0x00010005,
        Symbol_zeta                             : 0x00010006,
        Symbol_eta                              : 0x00010007,
        Symbol_theta                            : 0x00010008,
        Symbol_vartheta                         : 0x00010009,
        Symbol_iota                             : 0x0001000a,
        Symbol_kappa                            : 0x0001000b,
        Symbol_lambda                           : 0x0001000c,
        Symbol_mu                               : 0x0001000d,
        Symbol_nu                               : 0x0001000e,
        Symbol_xsi                              : 0x0001000f,
        Symbol_o                                : 0x00010010,
        Symbol_pi                               : 0x00010011,
        Symbol_varpi                            : 0x00010012,
        Symbol_rho                              : 0x00010013,
        Symbol_varrho                           : 0x00010014,
        Symbol_sigma                            : 0x00010015,
        Symbol_varsigma                         : 0x00010016,
        Symbol_tau                              : 0x00010017,
        Symbol_upsilon                          : 0x00010018,
        Symbol_varphi                           : 0x00010019,
        Symbol_phi                              : 0x0001001a,
        Symbol_chi                              : 0x0001001b,
        Symbol_psi                              : 0x0001001c,
        Symbol_omega                            : 0x0001001d,
        Symbol_Alpha                            : 0x00020000,
        Symbol_Beta                             : 0x00020001,
        Symbol_Gamma                            : 0x00020002,
        Symbol_Delta                            : 0x00020003,
        Symbol_Epsilon                          : 0x00020004,
        Symbol_Zeta                             : 0x00020005,
        Symbol_Eta                              : 0x00020006,
        Symbol_Theta                            : 0x00020007,
        Symbol_Iota                             : 0x00020008,
        Symbol_Kappa                            : 0x00020009,
        Symbol_Lambda                           : 0x0002000a,
        Symbol_Mu                               : 0x0002000b,
        Symbol_Nu                               : 0x0002000c,
        Symbol_Xsi                              : 0x0002000d,
        Symbol_O                                : 0x0002000e,
        Symbol_Pi                               : 0x0002000f,
        Symbol_Rho                              : 0x00020010,
        Symbol_Sigma                            : 0x00020011,
        Symbol_Tau                              : 0x00020012,
        Symbol_Upsilon                          : 0x00020013,
        Symbol_Phi                              : 0x00020014,
        Symbol_Chi                              : 0x00020015,
        Symbol_Psi                              : 0x00020016,
        Symbol_Omega                            : 0x00020017,

        FractionVertical                        : 0x01000000,
        FractionDiagonal                        : 0x01000001,
        FractionHorizontal                      : 0x01000002,
        FractionSmall                           : 0x01000003,
        FractionDifferential_1                  : 0x01010000,
        FractionDifferential_2                  : 0x01010001,
        FractionDifferential_3                  : 0x01010002,
        FractionDifferential_4                  : 0x01010003,
        FractionPi_2                            : 0x01010004,

        ScriptSup                               : 0x02000000,
        ScriptSub                               : 0x02000001,
        ScriptSubSup                            : 0x02000002,
        ScriptSubSupLeft                        : 0x02000003,
        ScriptCustom_1                          : 0x02010000,
        ScriptCustom_2                          : 0x02010001,
        ScriptCustom_3                          : 0x02010002,
        ScriptCustom_4                          : 0x02010003,

        RadicalSqrt                             : 0x03000000,
        RadicalRoot_n                           : 0x03000001,
        RadicalRoot_2                           : 0x03000002,
        RadicalRoot_3                           : 0x03000003,
        RadicalCustom_1                         : 0x03010000,
        RadicalCustom_2                         : 0x03010001,

        Integral                                : 0x04000000,
        IntegralSubSup                          : 0x04000001,
        IntegralCenterSubSup                    : 0x04000002,
        IntegralDouble                          : 0x04000003,
        IntegralDoubleSubSup                    : 0x04000004,
        IntegralDoubleCenterSubSup              : 0x04000005,
        IntegralTriple                          : 0x04000006,
        IntegralTripleSubSup                    : 0x04000007,
        IntegralTripleCenterSubSup              : 0x04000008,
        IntegralOriented                        : 0x04010000,
        IntegralOrientedSubSup                  : 0x04010001,
        IntegralOrientedCenterSubSup            : 0x04010002,
        IntegralOrientedDouble                  : 0x04010003,
        IntegralOrientedDoubleSubSup            : 0x04010004,
        IntegralOrientedDoubleCenterSubSup      : 0x04010005,
        IntegralOrientedTriple                  : 0x04010006,
        IntegralOrientedTripleSubSup            : 0x04010007,
        IntegralOrientedTripleCenterSubSup      : 0x04010008,
        Integral_dx                             : 0x04020000,
        Integral_dy                             : 0x04020001,
        Integral_dtheta                         : 0x04020002,

        LargeOperator_Sum                       : 0x05000000,
        LargeOperator_Sum_CenterSubSup          : 0x05000001,
        LargeOperator_Sum_SubSup                : 0x05000002,
        LargeOperator_Sum_CenterSub             : 0x05000003,
        LargeOperator_Sum_Sub                   : 0x05000004,
        LargeOperator_Prod                      : 0x05010000,
        LargeOperator_Prod_CenterSubSup         : 0x05010001,
        LargeOperator_Prod_SubSup               : 0x05010002,
        LargeOperator_Prod_CenterSub            : 0x05010003,
        LargeOperator_Prod_Sub                  : 0x05010004,
        LargeOperator_CoProd                    : 0x05010005,
        LargeOperator_CoProd_CenterSubSup       : 0x05010006,
        LargeOperator_CoProd_SubSup             : 0x05010007,
        LargeOperator_CoProd_CenterSub          : 0x05010008,
        LargeOperator_CoProd_Sub                : 0x05010009,
        LargeOperator_Union                     : 0x05020000,
        LargeOperator_Union_CenterSubSup        : 0x05020001,
        LargeOperator_Union_SubSup              : 0x05020002,
        LargeOperator_Union_CenterSub           : 0x05020003,
        LargeOperator_Union_Sub                 : 0x05020004,
        LargeOperator_Intersection              : 0x05020005,
        LargeOperator_Intersection_CenterSubSup : 0x05020006,
        LargeOperator_Intersection_SubSup       : 0x05020007,
        LargeOperator_Intersection_CenterSub    : 0x05020008,
        LargeOperator_Intersection_Sub          : 0x05020009,
        LargeOperator_Disjunction               : 0x05030000,
        LargeOperator_Disjunction_CenterSubSup  : 0x05030001,
        LargeOperator_Disjunction_SubSup        : 0x05030002,
        LargeOperator_Disjunction_CenterSub     : 0x05030003,
        LargeOperator_Disjunction_Sub           : 0x05030004,
        LargeOperator_Conjunction               : 0x05030005,
        LargeOperator_Conjunction_CenterSubSup  : 0x05030006,
        LargeOperator_Conjunction_SubSup        : 0x05030007,
        LargeOperator_Conjunction_CenterSub     : 0x05030008,
        LargeOperator_Conjunction_Sub           : 0x05030009,
        LargeOperator_Custom_1                  : 0x05040000,
        LargeOperator_Custom_2                  : 0x05040001,
        LargeOperator_Custom_3                  : 0x05040002,
        LargeOperator_Custom_4                  : 0x05040003,
        LargeOperator_Custom_5                  : 0x05040004,

        Bracket_Round                           : 0x06000000,
        Bracket_Square                          : 0x06000001,
        Bracket_Curve                           : 0x06000002,
        Bracket_Angle                           : 0x06000003,
        Bracket_LowLim                          : 0x06000004,
        Bracket_UppLim                          : 0x06000005,
        Bracket_Line                            : 0x06000006,
        Bracket_LineDouble                      : 0x06000007,
        Bracket_Square_OpenOpen                 : 0x06000008,
        Bracket_Square_CloseClose               : 0x06000009,
        Bracket_Square_CloseOpen                : 0x0600000a,
        Bracket_SquareDouble                    : 0x0600000b,
        Bracket_Round_Delimiter_2               : 0x06010000,
        Bracket_Curve_Delimiter_2               : 0x06010001,
        Bracket_Angle_Delimiter_2               : 0x06010002,
        Bracket_Angle_Delimiter_3               : 0x06010003,
        Bracket_Round_OpenNone                  : 0x06020000,
        Bracket_Round_NoneOpen                  : 0x06020001,
        Bracket_Square_OpenNone                 : 0x06020002,
        Bracket_Square_NoneOpen                 : 0x06020003,
        Bracket_Curve_OpenNone                  : 0x06020004,
        Bracket_Curve_NoneOpen                  : 0x06020005,
        Bracket_Angle_OpenNone                  : 0x06020006,
        Bracket_Angle_NoneOpen                  : 0x06020007,
        Bracket_LowLim_OpenNone                 : 0x06020008,
        Bracket_LowLim_NoneNone                 : 0x06020009,
        Bracket_UppLim_OpenNone                 : 0x0602000a,
        Bracket_UppLim_NoneOpen                 : 0x0602000b,
        Bracket_Line_OpenNone                   : 0x0602000c,
        Bracket_Line_NoneOpen                   : 0x0602000d,
        Bracket_LineDouble_OpenNone             : 0x0602000e,
        Bracket_LineDouble_NoneOpen             : 0x0602000f,
        Bracket_SquareDouble_OpenNone           : 0x06020010,
        Bracket_SquareDouble_NoneOpen           : 0x06020011,
        Bracket_Custom_1                        : 0x06030000,
        Bracket_Custom_2                        : 0x06030001,
        Bracket_Custom_3                        : 0x06030002,
        Bracket_Custom_4                        : 0x06030003,
        Bracket_Custom_5                        : 0x06040000,
        Bracket_Custom_6                        : 0x06040001,
        Bracket_Custom_7                        : 0x06040002,

        Function_Sin                            : 0x07000000,
        Function_Cos                            : 0x07000001,
        Function_Tan                            : 0x07000002,
        Function_Csc                            : 0x07000003,
        Function_Sec                            : 0x07000004,
        Function_Cot                            : 0x07000005,
        Function_1_Sin                          : 0x07010000,
        Function_1_Cos                          : 0x07010001,
        Function_1_Tan                          : 0x07010002,
        Function_1_Csc                          : 0x07010003,
        Function_1_Sec                          : 0x07010004,
        Function_1_Cot                          : 0x07010005,
        Function_Sinh                           : 0x07020000,
        Function_Cosh                           : 0x07020001,
        Function_Tanh                           : 0x07020002,
        Function_Csch                           : 0x07020003,
        Function_Sech                           : 0x07020004,
        Function_Coth                           : 0x07020005,
        Function_1_Sinh                         : 0x07030000,
        Function_1_Cosh                         : 0x07030001,
        Function_1_Tanh                         : 0x07030002,
        Function_1_Csch                         : 0x07030003,
        Function_1_Sech                         : 0x07030004,
        Function_1_Coth                         : 0x07030005,
        Function_Custom_1                       : 0x07040000,
        Function_Custom_2                       : 0x07040001,
        Function_Custom_3                       : 0x07040002,

        Accent_Dot                              : 0x08000000,
        Accent_DDot                             : 0x08000001,
        Accent_DDDot                            : 0x08000002,
        Accent_Hat                              : 0x08000003,
        Accent_Check                            : 0x08000004,
        Accent_Accent                           : 0x08000005,
        Accent_Grave                            : 0x08000006,
        Accent_Smile                            : 0x08000007,
        Accent_Tilde                            : 0x08000008,
        Accent_Bar                              : 0x08000009,
        Accent_DoubleBar                        : 0x0800000a,
        Accent_CurveBracketTop                  : 0x0800000b,
        Accent_CurveBracketBot                  : 0x0800000c,
        Accent_GroupTop                         : 0x0800000d,
        Accent_GroupBot                         : 0x0800000e,
        Accent_ArrowL                           : 0x0800000f,
        Accent_ArrowR                           : 0x08000010,
        Accent_ArrowD                           : 0x08000011,
        Accent_HarpoonL                         : 0x08000012,
        Accent_HarpoonR                         : 0x08000013,
        Accent_BorderBox                        : 0x08010000,
        Accent_BorderBoxCustom                  : 0x08010001,
        Accent_BarTop                           : 0x08020000,
        Accent_BarBot                           : 0x08020001,
        Accent_Custom_1                         : 0x08030000,
        Accent_Custom_2                         : 0x08030001,
        Accent_Custom_3                         : 0x08030002,

        LimitLog_LogBase                        : 0x09000000,
        LimitLog_Log                            : 0x09000001,
        LimitLog_Lim                            : 0x09000002,
        LimitLog_Min                            : 0x09000003,
        LimitLog_Max                            : 0x09000004,
        LimitLog_Ln                             : 0x09000005,
        LimitLog_Custom_1                       : 0x09010000,
        LimitLog_Custom_2                       : 0x09010001,

        Operator_ColonEquals                    : 0x0a000000,
        Operator_EqualsEquals                   : 0x0a000001,
        Operator_PlusEquals                     : 0x0a000002,
        Operator_MinusEquals                    : 0x0a000003,
        Operator_Definition                     : 0x0a000004,
        Operator_UnitOfMeasure                  : 0x0a000005,
        Operator_DeltaEquals                    : 0x0a000006,
        Operator_ArrowL_Top                     : 0x0a010000,
        Operator_ArrowR_Top                     : 0x0a010001,
        Operator_ArrowL_Bot                     : 0x0a010002,
        Operator_ArrowR_Bot                     : 0x0a010003,
        Operator_DoubleArrowL_Top               : 0x0a010004,
        Operator_DoubleArrowR_Top               : 0x0a010005,
        Operator_DoubleArrowL_Bot               : 0x0a010006,
        Operator_DoubleArrowR_Bot               : 0x0a010007,
        Operator_ArrowD_Top                     : 0x0a010008,
        Operator_ArrowD_Bot                     : 0x0a010009,
        Operator_DoubleArrowD_Top               : 0x0a01000a,
        Operator_DoubleArrowD_Bot               : 0x0a01000b,
        Operator_Custom_1                       : 0x0a020000,
        Operator_Custom_2                       : 0x0a020001,

        Matrix_1_2                              : 0x0b000000,
        Matrix_2_1                              : 0x0b000001,
        Matrix_1_3                              : 0x0b000002,
        Matrix_3_1                              : 0x0b000003,
        Matrix_2_2                              : 0x0b000004,
        Matrix_2_3                              : 0x0b000005,
        Matrix_3_2                              : 0x0b000006,
        Matrix_3_3                              : 0x0b000007,
        Matrix_Dots_Center                      : 0x0b010000,
        Matrix_Dots_Baseline                    : 0x0b010001,
        Matrix_Dots_Vertical                    : 0x0b010002,
        Matrix_Dots_Diagonal                    : 0x0b010003,
        Matrix_Identity_2                       : 0x0b020000,
        Matrix_Identity_2_NoZeros               : 0x0b020001,
        Matrix_Identity_3                       : 0x0b020002,
        Matrix_Identity_3_NoZeros               : 0x0b020003,
        Matrix_2_2_RoundBracket                 : 0x0b030000,
        Matrix_2_2_SquareBracket                : 0x0b030001,
        Matrix_2_2_LineBracket                  : 0x0b030002,
        Matrix_2_2_DLineBracket                 : 0x0b030003,
        Matrix_Flat_Round                       : 0x0b040000,
        Matrix_Flat_Square                      : 0x0b040001
    };

    Common.define.chartData = _.extend( new(function() {
        return {
            textLine: 'Line',
            textColumn: 'Column',
            textBar: 'Bar',
            textArea: 'Area',
            textPie: 'Pie',
            textPoint: 'XY (Scatter)',
            textStock: 'Stock',
            textSurface: 'Surface',
            textCharts: 'Charts',
            textSparks: 'Sparklines',
            textLineSpark: 'Line',
            textColumnSpark: 'Column',
            textWinLossSpark: 'Win/Loss',
            textCombo: 'Combo',
            textBarNormal: 'Clustered column',
            textBarStacked: 'Stacked column',
            textBarStackedPer: '100% Stacked column',
            textBarNormal3d: '3-D Clustered column',
            textBarStacked3d: '3-D Stacked column',
            textBarStackedPer3d: '3-D 100% Stacked column',
            textBarNormal3dPerspective: '3-D column',
            textLineStacked: 'Stacked line',
            textLineStackedPer: '100% Stacked line',
            textLineMarker: 'Line with markers',
            textLineStackedMarker: 'Stacked line with markers',
            textLineStackedPerMarker: '100% Stacked line with markers',
            textLine3d: '3-D line',
            textDoughnut: 'Doughnut',
            textPie3d: '3-D pie',
            textHBarNormal: 'Clustered bar',
            textHBarStacked: 'Stacked bar',
            textHBarStackedPer: '100% Stacked bar',
            textHBarNormal3d: '3-D Clustered bar',
            textHBarStacked3d: '3-D Stacked bar',
            textHBarStackedPer3d: '3-D 100% Stacked bar',
            textAreaStacked: 'Stacked area',
            textAreaStackedPer: '100% Stacked area',
            textScatter: 'Scatter',
            textScatterSmoothMarker: 'Scatter with smooth lines and markers',
            textScatterSmooth: 'Scatter with smooth lines',
            textScatterLineMarker: 'Scatter with straight lines and markers',
            textScatterLine: 'Scatter with straight lines',
            textComboBarLine: 'Clustered column - line',
            textComboBarLineSecondary: 'Clustered column - line on secondary axis',
            textComboAreaBar: 'Stacked area - clustered column',
            textComboCustom: 'Custom combination',

            getChartGroupData: function(headername) {
                return [
                    {id: 'menu-chart-group-bar', caption: this.textColumn, headername: (headername) ? this.textCharts : undefined},
                    {id: 'menu-chart-group-line', caption: this.textLine},
                    {id: 'menu-chart-group-pie', caption: this.textPie},
                    {id: 'menu-chart-group-hbar', caption: this.textBar},
                    {id: 'menu-chart-group-area', caption: this.textArea, inline: true},
                    {id: 'menu-chart-group-stock', caption: this.textStock, inline: true},
                    {id: 'menu-chart-group-scatter', caption: this.textPoint},
                    {id: 'menu-chart-group-combo', caption: this.textCombo}
                    // {id: 'menu-chart-group-surface', caption: this.textSurface}
                ];
            },

            getChartData: function() {
                return [
                    { group: 'menu-chart-group-bar',     type: Asc.c_oAscChartTypeSettings.barNormal,          iconCls: 'column-normal', tip: this.textBarNormal},
                    { group: 'menu-chart-group-bar',     type: Asc.c_oAscChartTypeSettings.barStacked,         iconCls: 'column-stack', tip: this.textBarStacked},
                    { group: 'menu-chart-group-bar',     type: Asc.c_oAscChartTypeSettings.barStackedPer,      iconCls: 'column-pstack', tip: this.textBarStackedPer},
                    { group: 'menu-chart-group-bar',     type: Asc.c_oAscChartTypeSettings.barNormal3d,        iconCls: 'column-3d-normal', tip: this.textBarNormal3d,      is3d: true},
                    { group: 'menu-chart-group-bar',     type: Asc.c_oAscChartTypeSettings.barStacked3d,       iconCls: 'column-3d-stack', tip: this.textBarStacked3d,      is3d: true},
                    { group: 'menu-chart-group-bar',     type: Asc.c_oAscChartTypeSettings.barStackedPer3d,    iconCls: 'column-3d-pstack', tip: this.textBarStackedPer3d,  is3d: true},
                    { group: 'menu-chart-group-bar',     type: Asc.c_oAscChartTypeSettings.barNormal3dPerspective,    iconCls: 'column-3d-normal-per', tip: this.textBarNormal3dPerspective, is3d: true},
                    { group: 'menu-chart-group-line',    type: Asc.c_oAscChartTypeSettings.lineNormal,         iconCls: 'line-normal', tip: this.textLine},
                    { group: 'menu-chart-group-line',    type: Asc.c_oAscChartTypeSettings.lineStacked,        iconCls: 'line-stack', tip: this.textLineStacked},
                    { group: 'menu-chart-group-line',    type: Asc.c_oAscChartTypeSettings.lineStackedPer,     iconCls: 'line-pstack', tip: this.textLineStackedPer},
                    { group: 'menu-chart-group-line',    type: Asc.c_oAscChartTypeSettings.lineNormalMarker,   iconCls: 'line-normal-marker', tip: this.textLineMarker},
                    { group: 'menu-chart-group-line',    type: Asc.c_oAscChartTypeSettings.lineStackedMarker,  iconCls: 'line-stack-marker', tip: this.textLineStackedMarker},
                    { group: 'menu-chart-group-line',    type: Asc.c_oAscChartTypeSettings.lineStackedPerMarker,iconCls: 'line-pstack-marker', tip: this.textLineStackedPerMarker},
                    { group: 'menu-chart-group-line',    type: Asc.c_oAscChartTypeSettings.line3d,             iconCls: 'line-3d', tip: this.textLine3d,                    is3d: true},
                    { group: 'menu-chart-group-pie',     type: Asc.c_oAscChartTypeSettings.pie,                iconCls: 'pie-normal', tip: this.textPie},
                    { group: 'menu-chart-group-pie',     type: Asc.c_oAscChartTypeSettings.doughnut,           iconCls: 'pie-doughnut', tip: this.textDoughnut},
                    { group: 'menu-chart-group-pie',     type: Asc.c_oAscChartTypeSettings.pie3d,              iconCls: 'pie-3d-normal', tip: this.textPie3d,               is3d: true},
                    { group: 'menu-chart-group-hbar',    type: Asc.c_oAscChartTypeSettings.hBarNormal,         iconCls: 'bar-normal', tip: this.textHBarNormal},
                    { group: 'menu-chart-group-hbar',    type: Asc.c_oAscChartTypeSettings.hBarStacked,        iconCls: 'bar-stack', tip: this.textHBarStacked},
                    { group: 'menu-chart-group-hbar',    type: Asc.c_oAscChartTypeSettings.hBarStackedPer,     iconCls: 'bar-pstack', tip: this.textHBarStackedPer},
                    { group: 'menu-chart-group-hbar',    type: Asc.c_oAscChartTypeSettings.hBarNormal3d,       iconCls: 'bar-3d-normal', tip: this.textHBarNormal3d,        is3d: true},
                    { group: 'menu-chart-group-hbar',    type: Asc.c_oAscChartTypeSettings.hBarStacked3d,      iconCls: 'bar-3d-stack', tip: this.textHBarStacked3d,        is3d: true},
                    { group: 'menu-chart-group-hbar',    type: Asc.c_oAscChartTypeSettings.hBarStackedPer3d,   iconCls: 'bar-3d-pstack', tip: this.textHBarStackedPer3d,    is3d: true},
                    { group: 'menu-chart-group-area',    type: Asc.c_oAscChartTypeSettings.areaNormal,         iconCls: 'area-normal', tip: this.textArea},
                    { group: 'menu-chart-group-area',    type: Asc.c_oAscChartTypeSettings.areaStacked,        iconCls: 'area-stack', tip: this.textAreaStacked},
                    { group: 'menu-chart-group-area',    type: Asc.c_oAscChartTypeSettings.areaStackedPer,     iconCls: 'area-pstack', tip: this.textAreaStackedPer},
                    { group: 'menu-chart-group-scatter', type: Asc.c_oAscChartTypeSettings.scatter,            iconCls: 'point-normal', tip: this.textScatter},
                    { group: 'menu-chart-group-scatter', type: Asc.c_oAscChartTypeSettings.scatterSmoothMarker,iconCls: 'point-smooth-marker', tip: this.textScatterSmoothMarker},
                    { group: 'menu-chart-group-scatter', type: Asc.c_oAscChartTypeSettings.scatterSmooth,      iconCls: 'point-smooth', tip: this.textScatterSmooth},
                    { group: 'menu-chart-group-scatter', type: Asc.c_oAscChartTypeSettings.scatterLineMarker,  iconCls: 'point-line-marker', tip: this.textScatterLineMarker},
                    { group: 'menu-chart-group-scatter', type: Asc.c_oAscChartTypeSettings.scatterLine,        iconCls: 'point-line', tip: this.textScatterLine},
                    { group: 'menu-chart-group-stock',   type: Asc.c_oAscChartTypeSettings.stock,              iconCls: 'stock-normal', tip: this.textStock},
                    { group: 'menu-chart-group-combo',   type: Asc.c_oAscChartTypeSettings.comboBarLine,       iconCls: 'combo-bar-line', tip: this.textComboBarLine},
                    { group: 'menu-chart-group-combo',   type: Asc.c_oAscChartTypeSettings.comboBarLineSecondary, iconCls: 'combo-bar-line-sec', tip: this.textComboBarLineSecondary},
                    { group: 'menu-chart-group-combo',   type: Asc.c_oAscChartTypeSettings.comboAreaBar,       iconCls: 'combo-area-bar', tip: this.textComboAreaBar},
                    { group: 'menu-chart-group-combo',   type: Asc.c_oAscChartTypeSettings.comboCustom,        iconCls: 'combo-custom', tip: this.textComboCustom}
                    // { group: 'menu-chart-group-surface', type: Asc.c_oAscChartTypeSettings.surfaceNormal,      iconCls: 'surface-normal'},
                    // { group: 'menu-chart-group-surface', type: Asc.c_oAscChartTypeSettings.surfaceWireframe,   iconCls: 'surface-wireframe'},
                    // { group: 'menu-chart-group-surface', type: Asc.c_oAscChartTypeSettings.contourNormal,      iconCls: 'contour-normal'},
                    // { group: 'menu-chart-group-surface', type: Asc.c_oAscChartTypeSettings.contourWireframe,   iconCls: 'contour-wireframe'}

                ];
            },

            getSparkGroupData: function(headername) {
                return [
                    { id: 'menu-chart-group-sparkcolumn', inline: true, headername: (headername) ? this.textSparks : undefined },
                    { id: 'menu-chart-group-sparkline', inline: true },
                    { id: 'menu-chart-group-sparkwin', inline: true }
                ];
            },

            getSparkData: function() {
                return [
                    { group: 'menu-chart-group-sparkcolumn',   type: Asc.c_oAscSparklineType.Column,    allowSelected: true, iconCls: 'spark-column', tip: this.textColumnSpark},
                    { group: 'menu-chart-group-sparkline',     type: Asc.c_oAscSparklineType.Line,      allowSelected: true, iconCls: 'spark-line',   tip: this.textLineSpark},
                    { group: 'menu-chart-group-sparkwin',      type: Asc.c_oAscSparklineType.Stacked,   allowSelected: true, iconCls: 'spark-win',    tip: this.textWinLossSpark}
                ];
            }
        }
    })(), Common.define.chartData || {});

    Common.define.conditionalData = _.extend( new(function() {
        return {
            textDate: 'Date',
            textYesterday: 'Yesterday',
            textToday: 'Today',
            textTomorrow: 'Tomorrow',
            textLast7days: 'In the last 7 days',
            textLastWeek: 'Last week',
            textThisWeek: 'This week',
            textNextWeek: 'Next week',
            textLastMonth: 'Last month',
            textThisMonth: 'This month',
            textNextMonth: 'Next month',
            textText: 'Text',
            textContains: 'Contains',
            textNotContains: 'Does not contain',
            textBegins: 'Begins with',
            textEnds: 'Ends with',
            textAverage: 'Average',
            textAbove: 'Above',
            textBelow: 'Below',
            textEqAbove: 'Equal to or above',
            textEqBelow: 'Equal to or below',
            text1Above: '1 std dev above',
            text1Below: '1 std dev below',
            text2Above: '2 std dev above',
            text2Below: '2 std dev below',
            text3Above: '3 std dev above',
            text3Below: '3 std dev below',
            textGreater: 'Greater than',
            textGreaterEq: 'Greater than or equal to',
            textLess: 'Less than',
            textLessEq: 'Less than or equal to',
            textEqual: 'Equal to',
            textNotEqual: 'Not equal to',
            textBetween: 'Between',
            textNotBetween: 'Not between',
            textTop: 'Top',
            textBottom: 'Bottom',
            textBlank: 'Blank',
            textError: 'Error',
            textBlanks: 'Contains blanks',
            textNotBlanks: 'Does not contain blanks',
            textErrors: 'Contains errors',
            textNotErrors: 'Does not contain errors',
            textDuplicate: 'Duplicate',
            textUnique: 'Unique',
            textDataBar: 'Data bar',
            textIconSets: 'Icon sets',
            textFormula: 'Formula',
            exampleText: 'AaBbCcYyZz',
            noFormatText: 'No format set',
            textValue: 'Value is'
        }
    })(), Common.define.conditionalData || {});

    Common.define.effectData = _.extend( new(function (){
        return {
            textEntrance: 'Entrance',
            textEmphasis: 'Emphasis',
            textExit: 'Exit',
            textAppear: 'Appear',
            textFade: 'Fade',
            textFlyIn: 'Fly in',
            textFloatIn: 'Float In',
            textSplit: 'Split',
            textWipe: 'Wipe',
            textShape: 'Shape',
            textWheel: 'Wheel',
            textRandomBars: 'Random Bars ',
            textGrowTurn: 'Grow & Turn',
            textZoom: 'Zoom',
            textSwivel: 'Swivel',
            textBounce: 'Bounce',
            textPulse: 'Pulse',
            textColorPulse: 'Color Pulse',
            textTeeter: 'Teeter',
            textSpin: 'Spin',
            textGrowShrink: 'Grow/Shrink',
            textShrinkTurn: 'Shrink & Turn',
            textDesaturate: 'Desaturate',
            textDarken: 'Darken',
            textLighten: 'Lighten',
            textTransparency: 'Transparency',
            textObjectColor: 'Object Color',
            textComplementaryColor: 'Complementary Color',
            textComplementaryColor2: 'Complementary Color 2',
            textLineColor: 'Line Color',
            textFillColor: 'Fill Color',
            textBrushColor: 'Brush Color',
            textFontColor: 'Font Color',
            textUnderline: 'Underline',
            textBoldFlash: 'Bold Flash',
            textBoldReveal: 'Bold Reveal',
            textWave: 'Wave',
            textDisappear: 'Disappear',
            textFlyOut: 'Fly Out',
            textFloatOut: 'Float Out',
            textBasic: 'Basic',
            textSubtle: 'Subtle',
            textModerate: 'Moderate',
            textExciting: 'Exciting',
            textLinesCurves: 'Lines Curves',
            textSpecial: 'Special',
            textBox: 'Box',
            textCircle: 'Circle',
            textPlus: 'Plus',
            textDiamond: 'Diamond',
            textDissolveIn: 'Dissolve In',
            textBlinds: 'Blinds',
            textCheckerboard: 'Checkerboard',
            textPeekIn: 'Peek In',
            textStrips: 'Strips',
            textExpand: 'Expand',
            textBasicZoom: 'Basic Zoom',
            textCompress: 'Compress',
            textFloatUp: 'Float Up',
            textRiseUp: 'Rise Up',
            textStretch: 'Stretch',
            textCenterRevolve: 'Center Revolve',
            textFloatDown: 'Float Down',
            textSpinner: 'Spinner',
            textBasicSwivel: 'Basic Swivel',
            textBoomerang: 'Boomerang',
            textCredits: 'Credits',
            textCuverUp: 'Cuver Up',
            textDrop: 'Drop',
            textFloat: 'Float',
            textPinwheel: 'Pinwheel',
            textSpiralIn: 'Spiral In',
            textWhip: 'Whip',
            textGrowWithColor: 'Grow With Color',
            textShimmer: 'Shimmer',
            textBlink: 'Blink',
            textDissolveOut: 'Dissolve Out',
            textPeekOut: 'Peek Out',
            textContrast: 'Contrast',
            textCollapse: 'Collapse',
            textSinkDown:'Sink Down',
            textCurveDown: 'CurveDown',
            textSpiralOut: 'Spiral Out',
            textContrastingColor: 'Contrasting Color',
            textPointStar4: '4 Point Star',
            textPointStar5: '5 Point Star',
            textPointStar6: '6 Point Star',
            textPointStar8: '8 Point Star',
            textCrescentMoon: 'Crescent Moon',
            textEqualTriangle: 'Equal Triangle',
            textFootball: 'Football',
            textHeart: 'Heart',
            textHexagon: 'Hexagon',
            textOctagon: 'Octagon',
            textParallelogram: 'Parallelogram',
            textPentagon: 'Pentagon',
            textSquare: 'Square',
            textTeardrop: 'Teardrop',
            textTrapezoid: 'Trapezoid',
            textArcDown: 'Arc Down',
            textArcLeft: 'Arc Left',
            textArcRight: 'Arc Right',
            textArcUp: 'Arc Up',
            textBounceLeft: 'Bounce Left',
            textBounceRight: 'Bounce Right',
            textCurvyLeft: 'Curvy Left',
            textCurvyRight: 'Curvy Right',
            textDecayingWave: 'Decaying Wave',
            textDiagonalDownRight: 'Diagonal Down Right',
            textDiagonalUpRight: 'Diagonal Up Right',
            textDown: 'Down',
            textFunnel: 'Funnel',
            textHeartbeat: 'Heartbeat',
            textLeft: 'Left',
            textRight: 'Right',
            textSCurve1: 'S Curve 1',
            textSCurve2: 'S Curve 2',
            textSineWave: 'Sine Wave',
            textSpiralLeft: 'Spiral Left',
            textSpiralRight: 'Spiral Right',
            textSpring: 'Spring:',
            textStairsDown: 'Stairs Down',
            textTurnDown: 'Turn Down',
            textTurnDownRight: 'Turn Down Right',
            textTurnUp: 'Turn Up',
            textTurnUpRight: 'Turn Up Right',
            textUp: 'Up',
            textZigzag: 'Zigzag',
            textBean: 'Bean',
            textCurvedSquare: 'CurvedSquare',
            textCurvedX:'Curved X',
            textCurvyStar: 'Curvy Star',
            textFigureFour: 'Figure 8 Four',
            textHorizontalFigure: 'Horizontal Figure 8',
            textInvertedSquare: 'Inverted Square',
            textInvertedTriangle: 'Inverted Triangle',
            textLoopDeLoop: 'Loop de Loop',
            textNeutron: 'Neutron',
            textPeanut: 'Peanut',
            textPointStar: 'Point Star',
            textSwoosh: 'Swoosh',
            textVerticalFigure: 'Vertical Figure 8',
            textRightTriangle: 'Right Triangle',
            textAcross: 'Across',
            textFromBottom: 'From Bottom',
            textFromBottomLeft: 'From Bottom-Left',
            textFromLeft: 'From Left',
            textFromTopLeft: 'From Top-Left',
            textFromTop: 'From Top',
            textFromTopRight: 'From Top-Right',
            textFromRight: 'From Right',
            textFromBottomRight: 'From Bottom-Right',
            textLeftDown: ' Left Down',
            textLeftUp: ' Left Up',
            textRightDown: ' Right Down',
            textRightUp: ' Right Up',
            textObjectCenter: 'Object Center',
            textSlideCenter: 'Slide Center',
            textInFromScreenCenter: 'In From Screen Center',
            textInToScreenCenter: 'In To Screen Center',
            textInSlightly: 'In Slightly',
            textOutFromScreenBottom: 'Out From Screen Bottom',
            textToFromScreenBottom: 'Out To Screen Bottom',
            textOutSlightly: 'Out Slightly',
            textToBottom: 'To Bottom',
            textToBottomLeft: 'To Bottom-Left',
            textToLeft: 'To Left',
            textToTopLeft: 'To Top-Left',
            textToTop: 'To Top',
            textToTopRight: 'To Top-Right',
            textToRight: 'To Right',
            textToBottomRight: 'To Bottom-Right',
            textSpoke1: '1 Spoke',
            textSpoke2: '2 Spoke',
            textSpoke3: '3 Spoke',
            textSpoke4: '4 Spoke',
            textSpoke8: '8 Spoke',

            getEffectGroupData: function (){
                return[
                    {id: 'menu-effect-group-entrance', value: Asc.AscFormat.PRESET_CLASS_ENTR, caption: this.textEntrance},
                    {id: 'menu-effect-group-emphasis', value: Asc.AscFormat.PRESET_CLASS_EMPH, caption: this.textEmphasis},
                    {id: 'menu-effect-group-exit',     value: Asc.AscFormat.PRESET_CLASS_EXIT, caption: this.textExit},
                    {id: 'menu-effect-group-path',     value: Asc.AscFormat.PRESET_CLASS_PATH, caption: this.textPath}

                ];
            },

            getEffectData: function (){
                return[
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_APPEAR,        iconCls: 'transition-push', caption: this.textAppear},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_FADE,          iconCls: 'transition-push', caption: this.textFade},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_FLY_IN_FROM,   iconCls: 'transition-push', caption: this.textFlyIn},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_FLOAT,         iconCls: 'transition-push', caption: this.textFloatIn},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_SPLIT,         iconCls: 'transition-push', caption: this.textSplit},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_WIPE_FROM,     iconCls: 'transition-wipe', caption: this.textWipe},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_BOX,           iconCls: 'transition-push', caption: this.textBox},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_CIRCLE,        iconCls: 'transition-push', caption: this.textCircle},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_PLUS,          iconCls: 'transition-push', caption: this.textPlus},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_DIAMOND,       iconCls: 'transition-push', caption: this.textDiamond},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_WHEEL,         iconCls: 'transition-push', caption: this.textWheel},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_RANDOM_BARS,   iconCls: 'transition-push', caption: this.textRandomBars},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_GROW_AND_TURN, iconCls: 'transition-push', caption: this.textGrowTurn},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_ZOOM,          iconCls: 'transition-zoom', caption: this.textZoom},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_SWIVEL,        iconCls: 'transition-push', caption: this.textSwivel},
                    {group: 'menu-effect-group-entrance',   value: Asc.AscFormat.ENTRANCE_BOUNCE,        iconCls: 'transition-push', caption: this.textBounce},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_PULSE,         iconCls: 'transition-push', caption: this.textPulse},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_COLOR_PULSE,   iconCls: 'transition-push', caption: this.textColorPulse},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_TEETER,        iconCls: 'transition-push', caption: this.textTeeter},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_SPIN,          iconCls: 'transition-split', caption: this.textSplit},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_GROW_SHRINK,   iconCls: 'transition-push', caption: this.textGrowShrink},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_DESATURATE,    iconCls: 'transition-push', caption: this.textDesaturate},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_CONTRASTING_DARKEN, iconCls: 'transition-push', caption: this.textDarken},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_LIGHTEN,       iconCls: 'transition-push', caption: this.textLighten},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_TRANSPARENCY,  iconCls: 'transition-push', caption: this.textTransparency},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_OBJECT_COLOR,  iconCls: 'transition-push', caption: this.textObjectColor},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_COMPLEMENTARY_COLOR,  iconCls: 'transition-push', caption: this.textComplementaryColor},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_LINE_COLOR,    iconCls: 'transition-push', caption: this.textLineColor},
                    {group: 'menu-effect-group-emphasis',   value: Asc.AscFormat.EMPHASIS_FILL_COLOR,    iconCls: 'transition-push', caption: this.textFillColor},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_DISAPPEAR,         iconCls: 'transition-push', caption: this.textDisappear},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_FADE,              iconCls: 'transition-push', caption: this.textFade},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_FLY_OUT_TO,        iconCls: 'transition-push', caption: this.textFlyOut},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_FLOAT,             iconCls: 'transition-push', caption: this.textFloatOut},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_SPLIT,             iconCls: 'transition-split', caption: this.textSplit},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_WIPE_FROM,         iconCls: 'transition-wipe', caption: this.textWipe},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_BOX,               iconCls: 'transition-push', caption: this.textBox},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_CIRCLE,            iconCls: 'transition-push', caption: this.textCircle},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_PLUS,              iconCls: 'transition-push', caption: this.textPlus},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_DIAMOND,           iconCls: 'transition-push', caption: this.textDiamond},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_WHEEL,             iconCls: 'transition-push', caption: this.textWheel},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_RANDOM_BARS,       iconCls: 'transition-push', caption: this.textRandomBars},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_SHRINK_AND_TURN,   iconCls: 'transition-push', caption: this.textShrinkTurn},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_ZOOM,              iconCls: 'transition-push', caption: this.textZoom},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_BASIC_SWIVEL,      iconCls: 'transition-push', caption: this.textSwivel},
                    {group: 'menu-effect-group-exit',       value: Asc.AscFormat.EXIT_BOUNCE,            iconCls: 'transition-push', caption: this.textBounce}
                   // {group: 'menu-effect-group-motion',     value: Asc.AscFormat.EXIT_BOUNCE,            iconCls: 'transition-push', caption: this.textBounce},
                ];
            },

            getLevelEffect: function (isPath){

                if(!isPath)
                    return [
                        {id: 'menu-effect-level-basic', caption:this.textBasic},
                        {id: 'menu-effect-level-subtle', caption:this.textSubtle},
                        {id: 'menu-effect-level-moderate', caption:this.textModerate},
                        {id: 'menu-effect-level-exciting', caption:this.textExciting}
                    ];
                else
                    return [
                        {id: 'menu-effect-level-basic', caption:this.textBasic},
                        {id: 'menu-effect-level-lines_curves', caption:this.textSubtle},
                        {id: 'menu-effect-level-special', caption:this.textModerate}
                    ];
            },

            getEffectFullData: function (){
                return [
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_APPEAR,        caption: this.textAppear},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_BLINDS,        caption: this.textBlinds},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_BOX,           caption: this.textBox},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_CHECKERBOARD,  caption: this.textCheckerboard},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_CIRCLE,        caption: this.textCircle},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_DIAMOND,       caption: this.textDiamond},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_DISSOLVE_IN,   caption: this.textDissolveIn},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_FLY_IN_FROM,   caption: this.textFlyIn},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_PEEK_IN_FROM,  caption: this.textPeekIn},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_PLUS,          caption: this.textPlus},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_RANDOM_BARS,   caption: this.textRandomBars},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_SPLIT,         caption: this.textSplit},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_STRIPS,        caption: this.textStrips},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_WEDGE,         caption: this.textWedge},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_WHEEL,         caption: this.textWheel},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-basic',     value: Asc.AscFormat.ENTRANCE_WIPE_FROM,     caption: this.textWipe},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-subtle',    value: Asc.AscFormat.ENTRANCE_EXPAND,        caption: this.textExpand},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-subtle',    value: Asc.AscFormat.ENTRANCE_FADE,          caption: this.textFade},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-subtle',    value: Asc.AscFormat.ENTRANCE_SWIVEL,        caption: this.textSwivel},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-subtle',    value: Asc.AscFormat.ENTRANCE_ZOOM,          caption: this.textZoom},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-moderate',  value: Asc.AscFormat.ENTRANCE_BASIC_ZOOM,  caption: this.textBasicZoom},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-moderate',  value: Asc.AscFormat.ENTRANCE_CENTER_REVOLVE, caption: this.textCenterRevolve},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-moderate',  value: Asc.AscFormat.ENTRANCE_CENTER_COMPRESS , caption: this.textCompress},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-moderate',  value: Asc.AscFormat.ENTRANCE_FLOAT_DOWN,  caption: this.textFloatDown},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-moderate',  value: Asc.AscFormat.ENTRANCE_FLOAT_UP,    caption: this.textFloatUp},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-moderate',  value: Asc.AscFormat.ENTRANCE_GROW_AND_TURN, caption: this.textGrowTurn},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-moderate',  value: Asc.AscFormat.ENTRANCE_RISE_UP,     caption: this.textRiseUp},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-moderate',  value: Asc.AscFormat.ENTRANCE_SPINNER,     caption: this.textSpinner},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-moderate',  value: Asc.AscFormat.ENTRANCE_STRETCH,     caption: this.textStretch},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_BASIC_SWIVEL, caption: this.textBasicSwivel},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_BOOMERANG,   caption: this.textBoomerang},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_BOUNCE,      caption: this.textBounce},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_CREDITS,     caption: this.textCredits},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_CURVE_UP,    caption: this.textCuverUp},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_DROP,        caption: this.textDrop},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_FLIP,        caption: this.textFlip},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_FLOAT,       caption: this.textFloat},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_PINWHEEL,    caption: this.textPinwheel},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_SPIRAL_IN,   caption: this.textSpiralIn},
                    {group: 'menu-effect-group-entrance', level:'menu-effect-level-exciting',  value: Asc.AscFormat.ENTRANCE_WHIP,        caption: this.textWhip},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-basic',     value: Asc.AscFormat.EMPHASIS_FILL_COLOR,  caption: this.textFillColor},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-basic',     value: Asc.AscFormat.EMPHASIS_GROW_SHRINK, caption: this.textGrowShrink},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-basic',     value: Asc.AscFormat.EMPHASIS_LINE_COLOR,  caption: this.textLineColor},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-basic',     value: Asc.AscFormat.EMPHASIS_SPIN,        caption: this.textSpin},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-basic',     value: Asc.AscFormat.EMPHASIS_TRANSPARENCY, caption: this.textTransparency},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-subtle',    value: Asc.AscFormat.EMPHASIS_COMPLEMENTARY_COLOR, caption: this.textComplementaryColor},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-subtle',    value: Asc.AscFormat.EMPHASIS_COMPLEMENTARY_COLOR_2, caption: this.textComplementaryColor2},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-subtle',    value: Asc.AscFormat.EMPHASIS_CONTRASTING_COLOR, caption: this.textContrastingColor},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-subtle',    value: Asc.AscFormat.EMPHASIS_CONTRASTING_DARKEN, caption: this.textDarken},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-subtle',    value: Asc.AscFormat.EMPHASIS_DESATURAT,  caption: this.textDesaturate},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-subtle',    value: Asc.AscFormat.EMPHASIS_LIGHTEN,    caption: this.textLighten},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-subtle',    value: Asc.AscFormat.EMPHASIS_OBJECT_COLOR,    caption: this.textObjectColor},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-subtle',    value: Asc.AscFormat.EMPHASIS_PULSE,      caption: this.textPulse},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-moderate',  value: Asc.AscFormat.EMPHASIS_COLOR_PULSE, caption: this.textColorPulse},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-moderate',  value: Asc.AscFormat.EMPHASIS_GROW_WITH_COLOR, caption: this.textGrowWithColor},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-moderate',  value: Asc.AscFormat.EMPHASIS_SHIMMER,    caption: this.textShimmer},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-moderate',  value: Asc.AscFormat.EMPHASIS_TEETER,     caption: this.textTeeter},
                    {group: 'menu-effect-group-emphasis', level:'menu-effect-level-exciting',  value: Asc.AscFormat.EMPHASIS_BLINK,      caption: this.textBlink},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_BLINDS,         caption: this.textBlinds},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_BOX,            caption: this.textBox},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_CHECKERBOARD,   caption: this.textCheckerboard},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_CIRCLE,         caption: this.textCircle},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_DIAMOND,        caption: this.textDiamond},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_DISAPPEAR,      caption: this.textDisappear},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_DISSOLVE_OUT,   caption: this.textDissolveOut},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_FLY_OUT_TO,     caption: this.textFlyOut},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_PEEK_OUT_TO,    caption: this.textPeekOut},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_PLUS,           caption: this.textPlus},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_RANDOM_BARS,    caption: this.textRandomBars},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_SPLIT,          caption: this.textSplit},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_STRIPS,         caption: this.textStrips},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_WEDGE,          caption: this.textWedge},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_WHEEL,          caption: this.textWheel},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-basic',     value: Asc.AscFormat.EXIT_WIPE_FROM,      caption: this.textWipe},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-subtle',    value: Asc.AscFormat.EXIT_CONTRACT,       caption: this.textContrast},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-subtle',    value: Asc.AscFormat.EXIT_FADE,           caption: this.textFade},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-subtle',    value: Asc.AscFormat.EXIT_SWIVEL,         caption: this.textSwivel},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-subtle',    value: Asc.AscFormat.EXIT_ZOOM,           caption: this.textZoom},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-moderate',  value: Asc.AscFormat.EXIT_BASIC_ZOOM,     caption: this.textBasicZoom},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-moderate',  value: Asc.AscFormat.EXIT_CENTER_REVOLVE, caption: this.textCenterRevolve},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-moderate',  value: Asc.AscFormat.EXIT_COLLAPSE,       caption: this.textCollapse},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-moderate',  value: Asc.AscFormat.EXIT_FLOAT_DOWN,     caption: this.textFloatDown},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-moderate',  value: Asc.AscFormat.EXIT_FLOAT_UP,       caption: this.textFloatUp},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-moderate',  value: Asc.AscFormat.EXIT_SHRINK_AND_TURN, caption: this.textShrinkTurn},
                    //sink down- EXIT_SHRINK_DOWN?
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-moderate',  value: Asc.AscFormat.EXIT_SPINNER,        caption: this.textSpinner},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-moderate',  value: Asc.AscFormat.EXIT_STRETCHY,       caption: this.textStretch},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_BASIC_SWIVEL,   caption: this.textBasicSwivel},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_BOOMERANG,      caption: this.textBoomerang},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_BOUNCE,         caption: this.textBounce},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_CREDITS,        caption: this.textCredits},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_CURVE_DOWN,     caption: this.textCurveDown},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_DROP,           caption: this.textDrop},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_FLIP,           caption: this.textFlip},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_FLOAT,          caption: this.textFloat},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_PINWHEEL,       caption: this.textPinwheel},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_SPIRAL_OUT,     caption: this.textSpiralOut},
                    {group: 'menu-effect-group-exit',     level:'menu-effect-level-exciting',  value: Asc.AscFormat.EXIT_WHIP,           caption: this.textWhip},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_PATH_4_POINT_STAR, caption: this.textPointStar4},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_PATH_5_POINT_STAR, caption: this.textPointStar5},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_PATH_6_POINT_STAR, caption: this.textPointStar6},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_PATH_8_POINT_STAR, caption: this.textPointStar8},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_CIRCLE,       caption: this.textCircle},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_CRESCENT_MOON, caption: this.textCrescentMoon},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_DIAMOND,      caption: this.textDiamond},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_EQUAL_TRIANGLE, caption: this.textEqualTriangle},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_FOOTBALL,     caption: this.textFootball},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_HEART,        caption: this.textHeart},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_HEXAGON,      caption: this.textHexagon},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_OCTAGON,      caption: this.textOctagon},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_PARALLELOGRAM, caption: this.textParallelogram},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_PENTAGON,     caption: this.textPentagon},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_RIGHT_TRIANGLE, caption: this.textRightTriangle},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_SQUARE,       caption: this.textSquare},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_TEARDROP,     caption: this.textTeardrop},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-basic',     value: Asc.AscFormat.MOTION_TRAPEZOID,    caption: this.textTrapezoid},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_ARC_DOWN,  caption: this.textArcDown},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_ARC_LEFT,  caption: this.textArcLeft},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_ARC_RIGHT, caption: this.textArcRight},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_ARC_UP,    caption: this.textArcUp},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_BOUNCE_LEFT, caption: this.textBounceLeft},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_BOUNCE_RIGHT, caption: this.textBounceRight},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_CURVY_LEFT, caption: this.textCurvyLeft},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_CURVY_RIGHT, caption: this.textCurvyRight},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_DECAYING_WAVE, caption: this.textDecayingWave},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_DIAGONAL_DOWN_RIGHT, caption: this.textDiagonalDownRight},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_DIAGONAL_UP_RIGHT, caption: this.textDiagonalUpRight},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_DOWN,      caption: this.textDown},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_FUNNEL,    caption: this.textFunnel},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_HEARTBEAT, caption: this.textHeartbeat},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_LEFT,      caption: this.textLeft},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_S_CURVE_1, caption: this.textSCurve1},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_S_CURVE_2, caption: this.textSCurve2},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_SINE_WAVE, caption: this.textSineWave},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_SINE_SPIRAL_LEFT, caption: this.textSpiralLeft},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_SINE_SPIRAL_RIGHT, caption: this.textSpiralRight},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_SPRING,    caption: this.textSpring},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_STAIRS_DOWN, caption: this.textStairsDown},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_TURN_DOWN, caption: this.textTurnDown},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_TURN_DOWN_RIGHT, caption: this.textTurnDownRight},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_TURN_UP,   caption: this.textTurnUp},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_TURN_UP_RIGHT, caption: this.textTurnUpRight},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_UP,        caption: this.textUp},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_WAVE,      caption: this.textWave},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-lines_curves', value: Asc.AscFormat.MOTION_ZIGZAG,    caption: this.textZigzag},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_BEAN,      caption: this.textBean},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_CURVED_SQUARE, caption: this.textCurvedSquare},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_CURVED_X,  caption: this.textCurvedX},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_CURVY_STAR, caption: this.textCurvyStar},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_FIGURE_8_FOUR, caption: this.textFigureFour},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_HORIZONTAL_FIGURE_8_FOUR, caption: this.textHorizontalFigure},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_INVERTED_SQUARE, caption: this.textInvertedSquare},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_INVERTED_TRIANGLE, caption: this.textInvertedTriangle},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_LOOP_DE_LOOP, caption: this.textLoopDeLoop},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_NEUTRON,   caption: this.textNeutron},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_PEANUT,    caption: this.textPeanut},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_POINTY_STAR, caption: this.textPointStar},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_SWOOSH,    caption: this.textSwoosh},
                    {group: 'menu-effect-group-path',     level:'menu-effect-level-special',      value: Asc.AscFormat.MOTION_VERTICAL_FIGURE_8, caption: this.textVerticalFigure}

                ];
            },

            getEffectOptionsData: function (group){
                var arr=[];
                switch (group) {
                    case 'menu-effect-group-entrance':
                        arr[Asc.AscFormat.ENTRANCE_APPEAR] = [];
                        arr[Asc.AscFormat.ENTRANCE_BLINDS] = [
                            {value: Asc.AscFormat.ENTRANCE_BLINDS_HORIZONTAL, caption: this.textHorizontal},
                            {value: Asc.AscFormat.ENTRANCE_BLINDS_VERTICAL, caption: this.textVertical}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_BOX] = [
                            {value: Asc.AscFormat.ENTRANCE_BOX_IN, caption: this.textIn},
                            {value: Asc.AscFormat.ENTRANCE_BOX_OUT, caption: this.textOut}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_CHECKERBOARD] = [
                            {value: Asc.AscFormat.ENTRANCE_CHECKERBOARD_ACROSS, caption: this.textAcross},
                            {value: Asc.AscFormat.ENTRANCE_CHECKERBOARD_DOWN, caption: this.textDown}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_CIRCLE] = [
                            {value: Asc.AscFormat.ENTRANCE_CIRCLE_IN, caption: this.textIn},
                            {value: Asc.AscFormat.ENTRANCE_CIRCLE_OUT, caption: this.textOut}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_DIAMOND] = [
                            {value: Asc.AscFormat.ENTRANCE_DIAMOND_IN, caption: this.textIn},
                            {value: Asc.AscFormat.ENTRANCE_DIAMOND_OUT, caption: this.textOut}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_DISSOLVE_IN] = [];
                        arr[Asc.AscFormat.ENTRANCE_FLY_IN_FROM] = [
                            {value: Asc.AscFormat.ENTRANCE_FLY_IN_FROM_BOTTOM, caption: this.textFromBottom},
                            {value: Asc.AscFormat.ENTRANCE_FLY_IN_FROM_BOTTOM_LEFT, caption: this.textFromBottomLeft},
                            {value: Asc.AscFormat.ENTRANCE_FLY_IN_FROM_LEFT, caption: this.textFromLeft},
                            {value: Asc.AscFormat.ENTRANCE_FLY_IN_FROM_TOP_LEFT, caption: this.textFromTopLeft},
                            {value: Asc.AscFormat.ENTRANCE_FLY_IN_FROM_TOP, caption: this.textFromTop},
                            {value: Asc.AscFormat.ENTRANCE_FLY_IN_FROM_TOP_RIGHT, caption: this.textFromTopRight},
                            {value: Asc.AscFormat.ENTRANCE_FLY_IN_FROM_RIGHT, caption: this.textFromRight},
                            {value: Asc.AscFormat.ENTRANCE_FLY_IN_FROM_BOTTOM_RIGHT, caption: this.textFromBottomRight}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_PEEK_IN_FROM] = [
                            {value: Asc.AscFormat.ENTRANCE_PEEK_IN_FROM_BOTTOM, caption: this.textFromBottom},
                            {value: Asc.AscFormat.ENTRANCE_PEEK_IN_FROM_LEFT, caption: this.textFromLeft},
                            {value: Asc.AscFormat.ENTRANCE_PEEK_IN_FROM_RIGHT, caption: this.textFromRight},
                            {value: Asc.AscFormat.ENTRANCE_PEEK_IN_FROM_TOP, caption: this.textFromTop}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_PLUS] = [
                            {value: Asc.AscFormat.ENTRANCE_PLUS_IN, caption: this.textIn},
                            {value: Asc.AscFormat.ENTRANCE_PLUS_OUT, caption: this.textOut}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_RANDOM_BARS] = [
                            {value: Asc.AscFormat.ENTRANCE_RANDOM_BARS_HORIZONTAL, caption: this.textHorizontal},
                            {value: Asc.AscFormat.ENTRANCE_RANDOM_BARS_VERTICAL, caption: this.textVertical}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_SPLIT] = [
                            {value: Asc.AscFormat.ENTRANCE_SPLIT_HORIZONTAL_IN, caption: this.textHorizontalIn},
                            {value: Asc.AscFormat.ENTRANCE_SPLIT_HORIZONTAL_OUT, caption: this.textHorizontalOut},
                            {value: Asc.AscFormat.ENTRANCE_SPLIT_VERTICAL_IN, caption: this.textVerticalIn},
                            {value: Asc.AscFormat.ENTRANCE_SPLIT_VERTICAL_OUT, caption: this.textVerticalOut}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_STRIPS] = [
                            {value: Asc.AscFormat.ENTRANCE_STRIPS_LEFT_DOWN, caption: this.textLeftDown},
                            {value: Asc.AscFormat.ENTRANCE_STRIPS_LEFT_UP, caption: this.textLeftUp},
                            {value: Asc.AscFormat.ENTRANCE_STRIPS_RIGHT_DOWN, caption: this.textRightDown},
                            {value: Asc.AscFormat.ENTRANCE_STRIPS_RIGHT_UP, caption: this.textRightUp}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_WEDGE] = [];
                        arr[Asc.AscFormat.ENTRANCE_WHEEL] = [
                            {value: Asc.AscFormat.ENTRANCE_WHEEL_1_SPOKE, caption: this.textSpoke1},
                            {value: Asc.AscFormat.ENTRANCE_WHEEL_2_SPOKE, caption: this.textSpoke2},
                            {value: Asc.AscFormat.ENTRANCE_WHEEL_3_SPOKE, caption: this.textSpoke3},
                            {value: Asc.AscFormat.ENTRANCE_WHEEL_4_SPOKE, caption: this.textSpoke4},
                            {value: Asc.AscFormat.ENTRANCE_WHEEL_8_SPOKE, caption: this.textSpoke8}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_WIPE_FROM] = [
                            {value: Asc.AscFormat.ENTRANCE_WIPE_FROM_BOTTOM, caption: this.textFromBottom},
                            {value: Asc.AscFormat.ENTRANCE_WIPE_FROM_LEFT, caption: this.textFromLeft},
                            {value: Asc.AscFormat.ENTRANCE_WIPE_FROM_RIGHT, caption: this.textFromRight},
                            {value: Asc.AscFormat.ENTRANCE_WIPE_FROM_FROM_TOP, caption: this.textFromTop}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_EXPAND] = [];
                        arr[Asc.AscFormat.ENTRANCE_FADE] = [];
                        arr[Asc.AscFormat.ENTRANCE_SWIVEL] = [];
                        arr[Asc.AscFormat.ENTRANCE_ZOOM] = [
                            {value: Asc.AscFormat.ENTRANCE_ZOOM_OBJECT_CENTER, caption: this.textObjectCenter},
                            {value: Asc.AscFormat.ENTRANCE_ZOOM_SLIDE_CENTER, caption: this.textSlideCenter}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_BASIC_ZOOM] = [
                            {value: Asc.AscFormat.ENTRANCE_BASIC_ZOOM_IN, caption: this.textIn},
                            {
                                value: Asc.AscFormat.ENTRANCE_BASIC_ZOOM_IN_FROM_SCREEN_CENTER,
                                caption: this.textInFromScreenCenter
                            },
                            {value: Asc.AscFormat.ENTRANCE_BASIC_ZOOM_IN_SLIGHTLY, caption: this.textInSlightly},
                            {value: Asc.AscFormat.ENTRANCE_BASIC_ZOOM_OUT, caption: this.textOut},
                            {
                                value: Asc.AscFormat.ENTRANCE_BASIC_ZOOM_OUT_FROM_SCREEN_BOTTOM,
                                caption: this.textOutFromScreenBottom
                            },
                            {value: Asc.AscFormat.ENTRANCE_BASIC_ZOOM_OUT_SLIGHTLY, caption: this.textOutSlightly}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_CENTER_REVOLVE] = [];
                        arr[Asc.AscFormat.ENTRANCE_CENTER_COMPRESS] = [];
                        arr[Asc.AscFormat.ENTRANCE_FLOAT_DOWN] = [];
                        arr[Asc.AscFormat.ENTRANCE_FLOAT_UP] = [];
                        arr[Asc.AscFormat.ENTRANCE_GROW_AND_TURN] = [];
                        arr[Asc.AscFormat.ENTRANCE_RISE_UP] = [];
                        arr[Asc.AscFormat.ENTRANCE_SPINNER] = [];
                        arr[Asc.AscFormat.ENTRANCE_STRETCH] = [
                            {value: Asc.AscFormat.ENTRANCE_STRETCH_ACROSS, caption: this.textAcross},
                            {value: Asc.AscFormat.ENTRANCE_STRETCH_FROM_BOTTOM, caption: this.textFromBottom},
                            {value: Asc.AscFormat.ENTRANCE_STRETCH_FROM_LEFT, caption: this.textFromLeft},
                            {value: Asc.AscFormat.ENTRANCE_STRETCH_FROM_RIGHT, caption: this.textFromRight},
                            {value: Asc.AscFormat.ENTRANCE_STRETCH_FROM_TOP, caption: this.textFromTop}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_BASIC_SWIVEL] = [
                            {value: Asc.AscFormat.ENTRANCE_BASIC_SWIVEL_HORIZONTAL, caption: this.textHorizontal},
                            {value: Asc.AscFormat.ENTRANCE_BASIC_SWIVEL_VERTICAL, caption: this.textVertical}
                        ];
                        arr[Asc.AscFormat.ENTRANCE_BOOMERANG] = [];
                        arr[Asc.AscFormat.ENTRANCE_BOUNCE] = [];
                        arr[Asc.AscFormat.ENTRANCE_CREDITS] = [];
                        arr[Asc.AscFormat.ENTRANCE_CURVE_UP] = [];
                        arr[Asc.AscFormat.ENTRANCE_DROP] = [];
                        arr[Asc.AscFormat.ENTRANCE_FLIP] = [];
                        arr[Asc.AscFormat.ENTRANCE_FLOAT] = [];
                        arr[Asc.AscFormat.ENTRANCE_PINWHEEL] = [];
                        arr[Asc.AscFormat.ENTRANCE_SPIRAL_IN] = [];
                        arr[Asc.AscFormat.ENTRANCE_WHIP] = [];

                        return arr;
                    case 'menu-effect-group-exit':
                        arr[Asc.AscFormat.EXIT_BLINDS] = [
                            {value: Asc.AscFormat.EXIT_BLINDS_HORIZONTAL, caption: this.textHorizontal},
                            {value: Asc.AscFormat.EXIT_BLINDS_VERTICAL, caption: this.textVertical}
                        ];
                        arr[Asc.AscFormat.EXIT_BOX] = [
                            {value: Asc.AscFormat.EXIT_BOX_IN, caption: this.textIn},
                            {value: Asc.AscFormat.EXIT_BOX_OUT, caption: this.textOut}
                        ];
                        arr[Asc.AscFormat.EXIT_CHECKERBOARD] = [
                            {value: Asc.AscFormat.EXIT_CHECKERBOARD_ACROSS, caption: this.textAcross},
                            {value: Asc.AscFormat.EXIT_CIRCLE_OUT, caption: this.textUp}
                        ];
                        arr[Asc.AscFormat.EXIT_CIRCLE] = [
                            {value: Asc.AscFormat.EXIT_CIRCLE_IN, caption: this.textIn},
                            {value: Asc.AscFormat.EXIT_BOX_OUT, caption: this.textOut}
                        ];
                        arr[Asc.AscFormat.EXIT_DIAMOND] = [
                            {value: Asc.AscFormat.EXIT_DIAMOND_IN, caption: this.textIn},
                            {value: Asc.AscFormat.EXIT_DIAMOND_IN, caption: this.textOut}
                        ];
                        arr[Asc.AscFormat.EXIT_DISAPPEAR] = [];
                        arr[Asc.AscFormat.EXIT_DISSOLVE_OUT] = [];
                        arr[Asc.AscFormat.EXIT_FLY_OUT_TO] = [
                            {value: Asc.AscFormat.EXIT_FLY_OUT_TO_BOTTOM, caption: this.textToBottom},
                            {value: Asc.AscFormat.EXIT_FLY_OUT_TO_BOTTOM_LEFT, caption: this.textToBottomLeft},
                            {value: Asc.AscFormat.EXIT_FLY_OUT_TO_LEFT, caption: this.textToLeft},
                            {value: Asc.AscFormat.EXIT_FLY_OUT_TO_TOP_LEFT, caption: this.textToTopLeft},
                            {value: Asc.AscFormat.EXIT_FLY_OUT_TO_TOP, caption: this.textToTop},
                            {value: Asc.AscFormat.EXIT_FLY_OUT_TO_TOP_RIGHT, caption: this.textToTopRight},
                            {value: Asc.AscFormat.EXIT_FLY_OUT_TO_RIGHT, caption: this.textToRight},
                            {value: Asc.AscFormat.EXIT_FLY_OUT_TO_BOTTOM_RIGHT, caption: this.textToBottomRight}
                        ];
                        arr[Asc.AscFormat.EXIT_PEEK_OUT_TO] = [
                            {value: Asc.AscFormat.EXIT_PEEK_OUT_TO_BOTTOM, caption: this.textToBottom},
                            {value: Asc.AscFormat.EXIT_PEEK_OUT_TO_LEFT, caption: this.textToLeft},
                            {value: Asc.AscFormat.EXIT_PEEK_OUT_TO_RIGHT, caption: this.textToRight},
                            {value: Asc.AscFormat.EXIT_PEEK_OUT_TO_TOP, caption: this.textToTop}
                        ];
                        arr[Asc.AscFormat.EXIT_PLUS] = [
                            {value: Asc.AscFormat.EXIT_PLUS_IN, caption: this.textIn},
                            {value: Asc.AscFormat.EXIT_PLUS_OUT, caption: this.textOut}
                        ];
                        arr[Asc.AscFormat.EXIT_RANDOM_BARS] = [
                            {value: Asc.AscFormat.EXIT_RANDOM_BARS_HORIZONTAL, caption: this.textHorizontal},
                            {value: Asc.AscFormat.EXIT_RANDOM_BARS_VERTICAL, caption: this.textVertical}
                        ];
                        arr[Asc.AscFormat.EXIT_SPLIT] = [
                            {value: Asc.AscFormat.EXIT_SPLIT_HORIZONTAL_IN, caption: this.textHorizontalIn},
                            {value: Asc.AscFormat.EXIT_SPLIT_HORIZONTAL_OUT, caption: this.textHorizontalOut},
                            {value: Asc.AscFormat.EXIT_SPLIT_VERTICAL_IN, caption: this.textVerticalIn},
                            {value: Asc.AscFormat.EXIT_SPLIT_VERTICAL_OUT, caption: this.textVerticalOut}
                        ];
                        arr[Asc.AscFormat.EXIT_STRIPS] = [
                            {value: Asc.AscFormat.EXIT_STRIPS_LEFT_DOWN, caption: this.textLeftDown},
                            {value: Asc.AscFormat.EXIT_STRIPS_LEFT_UP, caption: this.textLeftUp},
                            {value: Asc.AscFormat.EXIT_STRIPS_RIGHT_DOWN, caption: this.textRightDown},
                            {value: Asc.AscFormat.EXIT_STRIPS_RIGHT_UP, caption: this.textRightUp}
                        ];
                        arr[Asc.AscFormat.EXIT_WEDGE] = [];
                        arr[Asc.AscFormat.EXIT_WHEEL] = [
                            {value: Asc.AscFormat.EXIT_WHEEL_1_SPOKE, caption: this.textSpoke1},
                            {value: Asc.AscFormat.EXIT_WHEEL_2_SPOKE, caption: this.textSpoke2},
                            {value: Asc.AscFormat.EXIT_WHEEL_3_SPOKE, caption: this.textSpoke3},
                            {value: Asc.AscFormat.EXIT_WHEEL_4_SPOKE, caption: this.textSpoke4},
                            {value: Asc.AscFormat.EXIT_WHEEL_8_SPOKE, caption: this.textSpoke8}
                        ];
                        arr[Asc.AscFormat.EXIT_WIPE_FROM] = [
                            {value: Asc.AscFormat.EXIT_WIPE_FROM_BOTTOM, caption: this.textFromBottom},
                            {value: Asc.AscFormat.EXIT_WIPE_FROM_LEFT, caption: this.textFromLeft},
                            {value: Asc.AscFormat.EXIT_WIPE_FROM_RIGHT, caption: this.textFromRight},
                            {value: Asc.AscFormat.EXIT_WIPE_FROM_TOP, caption: this.textFromTop}
                        ];
                        arr[Asc.AscFormat.EXIT_CONTRACT] = [];
                        arr[Asc.AscFormat.EXIT_FADE] = [];
                        arr[Asc.AscFormat.EXIT_SWIVEL] = [];
                        arr[Asc.AscFormat.EXIT_ZOOM] = [
                            {value: Asc.AscFormat.ENTRANCE_ZOOM_OBJECT_CENTER, caption: this.textObjectCenter},
                            {value: Asc.AscFormat.ENTRANCE_ZOOM_SLIDE_CENTER, caption: this.textSlideCenter}
                        ];
                        arr[Asc.AscFormat.EXIT_BASIC_ZOOM] = [
                            {value: Asc.AscFormat.EXIT_BASIC_ZOOM_IN, caption: this.textIn},
                            {
                                value: Asc.AscFormat.EXIT_BASIC_ZOOM_IN_TO_SCREEN_BOTTOM,
                                caption: this.textInToScreenCenter
                            },
                            {value: Asc.AscFormat.EXIT_BASIC_ZOOM_IN_SLIGHTLY, caption: this.textInSlightly},
                            {value: Asc.AscFormat.EXIT_BASIC_ZOOM_OUT, caption: this.textOut},
                            {
                                value: Asc.AscFormat.EXIT_BASIC_ZOOM_OUT_TO_SCREEN_CENTER,
                                caption: this.textOutToScreenBottom
                            },
                            {value: Asc.AscFormat.EXIT_BASIC_ZOOM_OUT_SLIGHTLY, caption: this.textOutSlightly}
                        ];
                        arr[Asc.AscFormat.EXIT_CENTER_REVOLVE] = [];
                        arr[Asc.AscFormat.EXIT_COLLAPSE] = [
                            {value: Asc.AscFormat.EXIT_COLLAPSE_ACROSS, caption: this.textAcross},
                            {value: Asc.AscFormat.EXIT_COLLAPSE_TO_BOTTOM, caption: this.textToBottom},
                            {value: Asc.AscFormat.EXIT_COLLAPSE_TO_LEFT, caption: this.textToLeft},
                            {value: Asc.AscFormat.EXIT_COLLAPSE_TO_RIGHT, caption: this.textToRight},
                            {value: Asc.AscFormat.EXIT_COLLAPSE_TO_TOP, caption: this.textToTop}
                        ];
                        arr[Asc.AscFormat.EXIT_FLOAT_DOWN] = [];
                        arr[Asc.AscFormat.EXIT_FLOAT_UP] = [];
                        arr[Asc.AscFormat.EXIT_SHRINK_AND_TURN] = [];
                        //sink down- EXIT_SHRINK_DOWN?
                        arr[Asc.AscFormat.EXIT_SPINNER] = [];
                        arr[Asc.AscFormat.EXIT_STRETCHY] = [];
                        arr[Asc.AscFormat.EXIT_BASIC_SWIVEL] = [
                            {value: Asc.AscFormat.EXIT_BASIC_SWIVEL_HORIZONTAL, caption: this.textHorizontal},
                            {value: Asc.AscFormat.EXIT_BASIC_SWIVEL_VERTICAL, caption: this.textVertical}
                        ];
                        arr[Asc.AscFormat.EXIT_BOOMERANG] = [];
                        arr[Asc.AscFormat.EXIT_BOUNCE] = [];
                        arr[Asc.AscFormat.EXIT_CREDITS] = [];
                        arr[Asc.AscFormat.EXIT_CURVE_DOWN] = [];
                        arr[Asc.AscFormat.EXIT_DROP] = [];
                        arr[Asc.AscFormat.EXIT_FLIP] = [];
                        arr[Asc.AscFormat.EXIT_FLOAT] = [];
                        arr[Asc.AscFormat.EXIT_PINWHEEL] = [];
                        arr[Asc.AscFormat.EXIT_SPIRAL_OUT] = [];
                        arr[Asc.AscFormat.EXIT_WHIP] = [];

                        return arr;
                }
            }
        }
    })(),Common.define.effectData || {});
});
