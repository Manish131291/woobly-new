import { Service } from "../../../core-services";

export const getPremisesTypes = async () => {
  const reqObj = {
    baseurl:
      "https://mib-api-sit-merchant.aubankuat.in/api/master-service/masters/type-of-premises",
    method: "POST",
    url: "",
    obj: {
      refreshCache: true,
    },
  };
  const resp = await Service.send(reqObj);
  return resp?.data;
};
