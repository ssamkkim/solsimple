import React from 'react';

const AddressErrorPage = (address: any) => {
  return <div>{`"${address.address}" is not a valid address`}</div>;
};

export default AddressErrorPage;
