const { typeSeparator } = require("../utils/typeSeperator");

const bfhlController = async (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({
        is_success: false,
        error: "Input 'data' must be a non-empty array."
      });
    }

    const result = typeSeparator(data);

    const userInfo = {
      user_id: "Ankit_Kumar_Pandey_21082005",
      email: "ankit1067.be22@chitkarauniversity.edu.in",
      roll_number: "2211981067",
    };

    res.status(200).json({
      is_success: true,
      ...userInfo,
      ...result
    });

  } catch (err) {
    res.status(500).json({
      is_success: false,
      error: "Internal server error",
      message: err.message
    });
  }
};

module.exports = bfhlController;
