using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _2RERP.Domain;
using _2RERP.Domain.Common;

namespace _2RERP.Domain.Office
{
    public class Offices : MongoEntity
    {
        public int office_id { get; set; }
        public string office_code { get; set; }
        public string office_name { get; set; }
        public string nick_name { get; set; }
        public string registration_date { get; set; }
        public string currency_code { get; set; }
        public object po_box { get; set; }
        public object address_line_1 { get; set; }
        public object address_line_2 { get; set; }
        public string street { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip_code { get; set; }
        public string country { get; set; }
        public string phone { get; set; }
        public string fax { get; set; }
        public string email { get; set; }
        public string url { get; set; }
        public string registration_number { get; set; }
        public string pan_number { get; set; }
        public bool allow_transaction_posting { get; set; }
        public int parent_office_id { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
        public string income_tax_rate { get; set; }
        public string transaction_start_date { get; set; }
        public int week_start_day { get; set; }
        public bool primary_sales_tax_is_vat { get; set; }
        public bool has_state_sales_tax { get; set; }
        public bool has_county_sales_tax { get; set; }
        public string logo_file { get; set; }
    }

}
