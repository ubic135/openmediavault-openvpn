/**
 * Copyright (C) 2014 OpenMediaVault Plugin Developers
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// require("js/omv/workspace/panel/Textarea.js")

Ext.define("OMV.module.admin.diagnostic.service.plugin.OpenVpn", {
    extend: "OMV.workspace.panel.Textarea",
    alias: "omv.plugin.diagnostic.service.openvpn",

    title: _("OpenVPN"),
    rpcService: "OpenVpn",
    rpcMethod: "getStats"
});
