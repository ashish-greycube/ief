// Copyright (c) 2025, GreyCube Technologies and contributors
// For license information, please see license.txt

frappe.query_reports["FY Income Expense - Budget vs Actual"] = {
	"filters": [
		{
			"fieldname": "fiscal_year",
			"label": __("Fiscal Year"),
			"fieldtype": "Link",
			"options": "Fiscal Year",
			"default": frappe.defaults.get_user_default("fiscal_year"),
			"reqd": 1
		},
		{
			"fieldname": "company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"default": frappe.defaults.get_user_default("Company"),
			"reqd": 1
		}
	]
};

// frappe.query_reports["FY Income Expense - Budget vs Actual"] = $.extend({}, erpnext.financial_statements);

// erpnext.utils.add_dimensions("FY Income Expense - Budget vs Actual", 10);