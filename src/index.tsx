import * as Core from "@live-table/core"
import * as classNames from "classnames"
import * as React from "react"

declare namespace LiveTable {
	export interface Props<TDataRow> {
		columns?: Core.ColumnsOption<TDataRow>;
		data: TDataRow[];
		pagination?: Core.PaginationOption;
		search?: Core.SearchOption<TDataRow>;
	}
}

class LiveTable<DataRow>
extends React.PureComponent<LiveTable.Props<DataRow>>
implements Core.LiveTable<DataRow> {
	columns?: Core.ColumnsOption<DataRow>
	data: DataRow[] = []
	pagination?: Core.PaginationOption
	search?: Core.SearchOption<DataRow>
	table: Core.Table<DataRow> | null = null

	render(): React.ReactNode {
		return <div className={classNames(Core.ClassNames.LIVE_TABLE)}>

		</div>
	}
}

export default LiveTable
