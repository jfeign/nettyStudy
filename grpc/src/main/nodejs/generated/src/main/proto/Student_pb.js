/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.com.shengsiyuan.proto.MyRequest', null, global);
goog.exportSymbol('proto.com.shengsiyuan.proto.MyResponse', null, global);
goog.exportSymbol('proto.com.shengsiyuan.proto.MyResponseList', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.shengsiyuan.proto.MyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.shengsiyuan.proto.MyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.shengsiyuan.proto.MyRequest.displayName = 'proto.com.shengsiyuan.proto.MyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.shengsiyuan.proto.MyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.shengsiyuan.proto.MyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.shengsiyuan.proto.MyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.shengsiyuan.proto.MyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.shengsiyuan.proto.MyRequest}
 */
proto.com.shengsiyuan.proto.MyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.shengsiyuan.proto.MyRequest;
  return proto.com.shengsiyuan.proto.MyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.shengsiyuan.proto.MyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.shengsiyuan.proto.MyRequest}
 */
proto.com.shengsiyuan.proto.MyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.shengsiyuan.proto.MyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.shengsiyuan.proto.MyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.shengsiyuan.proto.MyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.shengsiyuan.proto.MyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.com.shengsiyuan.proto.MyRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.shengsiyuan.proto.MyRequest.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.shengsiyuan.proto.MyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.shengsiyuan.proto.MyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.shengsiyuan.proto.MyResponse.displayName = 'proto.com.shengsiyuan.proto.MyResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.shengsiyuan.proto.MyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.shengsiyuan.proto.MyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.shengsiyuan.proto.MyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.shengsiyuan.proto.MyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    realname: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.shengsiyuan.proto.MyResponse}
 */
proto.com.shengsiyuan.proto.MyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.shengsiyuan.proto.MyResponse;
  return proto.com.shengsiyuan.proto.MyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.shengsiyuan.proto.MyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.shengsiyuan.proto.MyResponse}
 */
proto.com.shengsiyuan.proto.MyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.shengsiyuan.proto.MyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.shengsiyuan.proto.MyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.shengsiyuan.proto.MyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.shengsiyuan.proto.MyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string realname = 1;
 * @return {string}
 */
proto.com.shengsiyuan.proto.MyResponse.prototype.getRealname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.shengsiyuan.proto.MyResponse.prototype.setRealname = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.shengsiyuan.proto.MyResponseList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.shengsiyuan.proto.MyResponseList.repeatedFields_, null);
};
goog.inherits(proto.com.shengsiyuan.proto.MyResponseList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.shengsiyuan.proto.MyResponseList.displayName = 'proto.com.shengsiyuan.proto.MyResponseList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.shengsiyuan.proto.MyResponseList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.shengsiyuan.proto.MyResponseList.prototype.toObject = function(opt_includeInstance) {
  return proto.com.shengsiyuan.proto.MyResponseList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.shengsiyuan.proto.MyResponseList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.shengsiyuan.proto.MyResponseList.toObject = function(includeInstance, msg) {
  var f, obj = {
    responseList: jspb.Message.toObjectList(msg.getResponseList(),
    proto.com.shengsiyuan.proto.MyResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.shengsiyuan.proto.MyResponseList}
 */
proto.com.shengsiyuan.proto.MyResponseList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.shengsiyuan.proto.MyResponseList;
  return proto.com.shengsiyuan.proto.MyResponseList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.shengsiyuan.proto.MyResponseList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.shengsiyuan.proto.MyResponseList}
 */
proto.com.shengsiyuan.proto.MyResponseList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.shengsiyuan.proto.MyResponse;
      reader.readMessage(value,proto.com.shengsiyuan.proto.MyResponse.deserializeBinaryFromReader);
      msg.addResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.shengsiyuan.proto.MyResponseList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.shengsiyuan.proto.MyResponseList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.shengsiyuan.proto.MyResponseList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.shengsiyuan.proto.MyResponseList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.com.shengsiyuan.proto.MyResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MyResponse response = 1;
 * @return {!Array<!proto.com.shengsiyuan.proto.MyResponse>}
 */
proto.com.shengsiyuan.proto.MyResponseList.prototype.getResponseList = function() {
  return /** @type{!Array<!proto.com.shengsiyuan.proto.MyResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.shengsiyuan.proto.MyResponse, 1));
};


/** @param {!Array<!proto.com.shengsiyuan.proto.MyResponse>} value */
proto.com.shengsiyuan.proto.MyResponseList.prototype.setResponseList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.shengsiyuan.proto.MyResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.shengsiyuan.proto.MyResponse}
 */
proto.com.shengsiyuan.proto.MyResponseList.prototype.addResponse = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.shengsiyuan.proto.MyResponse, opt_index);
};


proto.com.shengsiyuan.proto.MyResponseList.prototype.clearResponseList = function() {
  this.setResponseList([]);
};


goog.object.extend(exports, proto.com.shengsiyuan.proto);