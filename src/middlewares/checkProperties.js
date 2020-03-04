const checkProperties = model => (req, res, next) => {
  // If a property is missing in the payload, the following message should be returned "Property {property_name} is required"
  // If more than one property is missing in the payload the following message should be returned "The following properties are required: {properties separated by comas}"
  next();
};

module.exports = checkProperties;
