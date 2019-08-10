

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    let ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(sym => Object.getOwnPropertyDescriptor(source, sym).enumerable));
    }

    ownKeys.forEach((key) => {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], () => {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      const a = [null];
      a.push.apply(a, args);
      const Constructor = Function.bind.apply(Parent, a);
      const instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf('[native code]') !== -1;
}

function _wrapNativeSuper(Class) {
  const _cache = typeof Map === 'function' ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== 'function') {
      throw new TypeError('Super expression must either be null or a function');
    }

    if (typeof _cache !== 'undefined') {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

const defaults = {
  loadPath: '/locales/{{lng}}/{{ns}}.json',
  addPath: '/locales/add/{{lng}}/{{ns}}',
  multiSeparator: '+',
  allowMultiLoading: false,
  parse: JSON.parse,
  stringify: JSON.stringify,
  fetch: typeof fetch === 'undefined' ? (() => {}) : fetch,
  requestOptions: {},
};

const arrify = function arrify(val) {
  return Array.isArray(val) ? val : [val];
};

const normalize = function normalize(funcOrVal) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof funcOrVal === 'function' ? funcOrVal.apply(void 0, args) : funcOrVal;
};

const BackendError =
    /* #__PURE__ */
    (function (_Error) {
      _inherits(BackendError, _Error);

      function BackendError(message) {
        let _this;

        const retry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, BackendError);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(BackendError).call(this, message));

        _defineProperty(_assertThisInitialized(_this), 'retry', null);

        _this.retry = retry;
        return _this;
      }

      return BackendError;
    }(_wrapNativeSuper(Error)));

const Backend =
    /* #__PURE__ */
    (function () {
      function Backend(services, options) {
        _classCallCheck(this, Backend);

        _defineProperty(this, 'type', 'backend');

        this.init(services, options);
      }

      _createClass(Backend, [{
        key: 'init',
        value: function init(services) {
          const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.services = services;
          this.options = _objectSpread({}, defaults, this.options, options);
        },
      }, {
        key: 'getLoadPath',
        value: function getLoadPath(languages, namespaces) {
          return normalize(this.options.loadPath, languages, namespaces);
        },
      }, {
        key: 'read',
        value: function read(language, namespace, callback) {
          const loadPath = this.getLoadPath(language, namespace);
          const url = this.services.interpolator.interpolate(loadPath, {
            lng: language,
            ns: namespace,
          });
          this.loadUrl(url, callback);
        },
      }, {
        key: 'readMulti',
        value: function readMulti(languages, namespaces, callback) {
          const loadPath = this.getLoadPath(languages, namespaces);
          const { multiSeparator } = this.options;
          const url = this.services.interpolator.interpolate(loadPath, {
            lng: languages.join(multiSeparator),
            ns: namespaces.join(multiSeparator),
          });
          this.loadUrl(url, callback);
        },
      }, {
        key: 'loadUrl',
        value: function loadUrl(url, callback) {
          const _this$options = this.options;
          const { fetch } = _this$options;
          const { requestOptions } = _this$options;
          const { parse } = _this$options;
          fetch(url, requestOptions).then((response) => {
            const { ok } = response;
            const { status } = response;

            if (!ok) {
              const retry = status >= 500 && status < 600; // don't retry for 4xx codes

              throw new BackendError('failed loading '.concat(url), retry);
            }

            return response.text();
          }, () => {
            throw new BackendError('failed loading '.concat(url));
          }).then((data) => {
            try {
              return callback(null, parse(data, url));
            } catch (e) {
              throw new BackendError('failed parsing '.concat(url, ' to json'), false);
            }
          }).catch((e) => {
            if (e instanceof BackendError) {
              callback(e.message, e.retry);
            }
          });
        },
      }, {
        key: 'create',
        value: function create(languages, namespace, key, fallbackValue) {
          const _this2 = this;

          const payload = _defineProperty({}, key, fallbackValue || '');

          arrify(languages).forEach((lng) => {
            const _this2$options = _this2.options;
            const { addPath } = _this2$options;
            const { requestOptions } = _this2$options;
            const { fetch } = _this2$options;
            const { stringify } = _this2$options;

            const url = _this2.services.interpolator.interpolate(addPath, {
              lng,
              ns: namespace,
            });

            try {
              fetch(url, _objectSpread({
                method: 'POST',
                body: stringify(payload),
              }, requestOptions));
            } catch (ex) {
              console.error(ex);
            }
          });
        },
      }]);

      return Backend;
    }());

_defineProperty(Backend, 'type', 'backend');

module.exports = Backend;
