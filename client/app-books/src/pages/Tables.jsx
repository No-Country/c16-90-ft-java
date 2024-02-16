import Breadcrumb from "../components/Admin/Breadcrumbs/Breadcrumb";
import TableOne from "../components/Admin/Tables/TableOne";
import TableThree from "../components/Admin/Tables/TableThree";
import TableTwo from "../components/Admin/Tables/TableTwo";
import DefaultLayout from "../layout/DefaultLayout";

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
