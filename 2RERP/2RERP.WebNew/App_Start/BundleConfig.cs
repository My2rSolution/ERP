using System.Web;
using System.Web.Optimization;

namespace _2RERP.WebNew
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));
            // My JavaScript
            bundles.Add(new ScriptBundle("~/bundles/js/mylibs/polyfills/Essentialpolyfills").Include(
                       "~/js/mylibs/polyfills/modernizr-2.6.1.min.js",
                        "~/js/mylibs/polyfills/respond.js",
                       "~/js/mylibs/polyfills/matchmedia.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/mylibs/General").Include(
                        "~/js/mylibs/jquery.hashchange.js",
                        "~/js/mylibs/jquery.idle-timer.jss",
                        "~/js/mylibs/jquery.plusplus.js",
                        "~/js/mylibs/jquery.jgrowl.js",
                        "~/js/mylibs/jquery.scrollTo.js",
                        "~/js/mylibs/jquery.ui.touch-punch.js",
                        "~/js/mylibs/jquery.ui.multiaccordion.js",
                        "~/js/mylibs/number-functions.js"));

            // Forms
            bundles.Add(new ScriptBundle("~/bundles/js/mylibs/forms").Include(
                        "~/js/mylibs/forms/jquery.autosize.js",
                        "~/js/mylibs/forms/jquery.checkbox.js",
                        "~/js/mylibs/forms/jquery.chosen.js",
                        "~/js/mylibs/forms/jquery.cleditor.js",
                        "~/js/mylibs/forms/jquery.colorpicker.js",
                        "~/js/mylibs/forms/jquery.ellipsis.js",
                        "~/js/mylibs/forms/jquery.fileinput.js",
                        "~/js/mylibs/forms/jquery.fullcalendar.js",
                        "~/js/mylibs/forms/jquery.maskedinput.js",
                        "~/js/mylibs/forms/jquery.mousewheel.js",
                        "~/js/mylibs/forms/jquery.placeholder.js",
                        "~/js/mylibs/forms/jquery.pwdmeter.js",
                        "~/js/mylibs/forms/jquery.ui.datetimepicker.js",
                        "~/js/mylibs/forms/jquery.ui.spinner.js",
                        "~/js/mylibs/forms/jquery.validate.js",
                        "~/js/mylibs/forms/uploader/plupload.js",
                        "~/js/mylibs/forms/uploader/plupload.html5.js",
                        "~/js/mylibs/forms/uploader/plupload.html4.js",
                        "~/js/mylibs/forms/uploader/plupload.flash.js",
                        "~/js/mylibs/forms/uploader/jquery.plupload.queue/jquery.plupload.queue.js"));
           // <!-- Charts -->
            bundles.Add(new ScriptBundle("~/bundles/js/mylibs/charts").Include(
                        "~/js/mylibs/charts/jquery.flot.js",
                        "~/js/mylibs/charts/jquery.flot.orderBars.js",
                        "~/js/mylibs/charts/jquery.flot.pie.js",
                        "~/js/mylibs/charts/jquery.flot.resize.js"));
            //<!-- Explorer -->
            bundles.Add(new ScriptBundle("~/bundles/js/mylibs/Explorer").Include(
                   "~/js/mylibs/explorer/jquery.elfinder.js"));

            //<!-- Fullstats -->
            bundles.Add(new ScriptBundle("~/bundles/js/mylibs/fullstats").Include(
                    "~/js/mylibs/fullstats/jquery.css-transform.js",
                     "~/js/mylibs/fullstats/jquery.animate-css-rotate-scale.js",
                    "~/js/mylibs/fullstats/jquery.sparkline.js"));
            //<!-- Syntax Highlighter -->
            bundles.Add(new ScriptBundle("~/bundles/js/mylibs/syntaxhighlighter").Include(
                   "~/js/mylibs/syntaxhighlighter/shCore.js",
                   "~/js/mylibs/syntaxhighlighter/shAutoloader.js"));

            //	<!-- Dynamic Tables -->
            bundles.Add(new ScriptBundle("~/bundles/js/mylibs/dynamictables").Include(
                   "~/js/mylibs/dynamic-tables/jquery.dataTables.js",
                    "~/js/mylibs/dynamic-tables/jquery.dataTables.tableTools.zeroClipboard.js",
                   "~/js/mylibs/dynamic-tables/jquery.dataTables.tableTools.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/mylibs/gallery").Include(
                 "~/js/mylibs/gallery/jquery.fancybox.js"));


            bundles.Add(new ScriptBundle("~/bundles/js/mylibs/tooltips").Include(
                "~/js/mylibs/tooltips/jquery.tipsy.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));

            // My Css
            bundles.Add(new StyleBundle("~/css/Layout").Include(
                        "~/css/style.css",
                        "~/css/grid.css",
                        "~/css/layout.css"));
            bundles.Add(new StyleBundle("~/css/Icon").Include(
                        "~/css/icons.css",
                        "~/css/fonts/font-awesome.css"));

            bundles.Add(new StyleBundle("~/css/external/ExternalStyles").Include(
                        "~/css/external/jquery-ui-1.8.21.custom.css",
                        "~/css/external/jquery.chosen.css",
                        "~/css/external/jquery.cleditor.css",
                        "~/css/external/jquery.colorpicker.css",
                        "~/css/external/jquery.elfinder.css",
                        "~/css/external/jquery.fancybox.css",
                        "~/css/external/jquery.jgrowl.css",
                        "~/css/external/jquery.plupload.queue.css",
                        "~/css/external/syntaxhighlighter/shCore.css",
                        "~/css/external/syntaxhighlighter/shThemeDefault.css"));
            bundles.Add(new StyleBundle("~/css/Elements").Include(
                      "~/css/elements.css",
                      "~/css/forms.css"));

            bundles.Add(new StyleBundle("~/css/PrintStylesheetforInvoice").Include(
                     "~/css/print-invoice.css"));
            bundles.Add(new StyleBundle("~/css/Typographics").Include(
                    "~/css/typographics.css"));
            bundles.Add(new StyleBundle("~/css/ResponsiveDesign").Include(
                   "~/css/media-queries.css"));
            bundles.Add(new StyleBundle("~/css/IEStyles").Include(
                 "~/css/ie-fixes.css"));
        }
    }
}