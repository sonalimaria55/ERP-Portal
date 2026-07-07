class ApiResponse {

  constructor(
    success,
    message,
    data = null,
    pagination = null
  ) {

    this.success = success;
    this.message = message;

    if (data !== null) {
      this.data = data;
    }

    if (pagination !== null) {
      this.pagination = pagination;
    }

  }

}

module.exports = ApiResponse;