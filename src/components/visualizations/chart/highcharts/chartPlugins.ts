// (C) 2007-2018 GoodData Corporation
import autohideLabels from './plugins/autohideLabels/autohideLabels';
import { extendDataLabelColors } from './plugins/dataLabelsColors';
import { applyPointHaloOptions } from './plugins/pointHalo';
import { patternFill } from './plugins/patternFillV2';
import { renderHeatmapCells } from './plugins/renderHeatmapCells';

const extendRenderStackTotals = (Highcharts: any) => {
    Highcharts.wrap(Highcharts.Axis.prototype, 'renderStackTotals', function(proceed: any) {
        const axis = this;
        const { chart, stackTotalGroup } = axis;
        const { renderer } = chart;
        /* We override renderStackTotals method to render "stack-labels" directly with desired
         * visibility to prevent blinking of data labels while resizing. In Highcharts it's
         * by default:
         *     visibility: VISIBLE,
         */
        const defaultVisibility = chart.userOptions.stackLabelsVisibility || 'visible';

        if (!stackTotalGroup) {
            axis.stackTotalGroup =
                renderer.g('stack-labels')
                    .attr({
                        visibility: defaultVisibility,
                        zIndex: 6
                    })
                    .add();
        }
        proceed.call(this);
    });
};

export function initChartPlugins(Highcharts: any) {
    extendRenderStackTotals(Highcharts);
    autohideLabels(Highcharts);
    extendDataLabelColors(Highcharts);
    applyPointHaloOptions(Highcharts);
    patternFill(Highcharts);
    renderHeatmapCells(Highcharts);
}
