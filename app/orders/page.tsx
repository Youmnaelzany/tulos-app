import { useRequiredUser } from "@/hooks/requiredUser";

const Orders = async () => {
  await useRequiredUser();
  return <div>Orders</div>;
};
export default Orders;
